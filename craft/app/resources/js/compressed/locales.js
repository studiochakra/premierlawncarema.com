/*
 Copyright (c) 2014, Pixel & Tonic, Inc.
 @license   http://buildwithcraft.com/license Craft License Agreement
 @see       http://buildwithcraft.com
 @package   craft.app.resources
*/
(function(c){Craft.Locales=Garnish.Base.extend({$addLocaleField:null,$addLocaleInput:null,$addLocaleSpinner:null,$resultsSheet:null,$resultsList:null,$activeLocale:null,locales:null,selectedLocales:null,adminTable:null,inputVal:null,showingResultsSheet:!1,init:function(a,b){this.locales={};for(var d in a)this.locales[d]={name:a[d],words:Craft.asciiString(d+" "+a[d]).match(Craft.Locales.wordRegex)};this.selectedLocales=b;this.$addLocaleField=c("#addlocale");this.$addLocaleInput=c("#addlocaleinput");
this.$addLocaleSpinner=this.$addLocaleField.find(".spinner");this.adminTable=new Craft.AdminTable({tableSelector:"#locales",sortable:!0,minObjects:1,reorderAction:"localization/reorderLocales",deleteAction:"localization/deleteLocale",confirmDeleteMessage:Craft.t("Are you sure you want to delete \u201c{name}\u201d and all its associated content?"),onDeleteObject:c.proxy(function(a){a=c.inArray(a,this.selectedLocales);-1!=a&&this.selectedLocales.splice(a,1)},this)});this.addListener(this.$addLocaleInput,
"keydown","onKeyDown");this.addListener(this.$addLocaleInput,"focus","onFocus");this.addListener(this.$addLocaleInput,"blur","onBlur")},onKeyDown:function(a){switch(a.keyCode){case Garnish.ESC_KEY:this.$addLocaleInput.val("");this.hideResultsSheet();return;case Garnish.RETURN_KEY:a.preventDefault();this.addSelectedLocale();return;case Garnish.UP_KEY:this.setRelativeActiveLocale("prev");return;case Garnish.DOWN_KEY:this.setRelativeActiveLocale("next");return}setTimeout(c.proxy(this,"checkInputVal"),
1)},onFocus:function(){this.inputVal&&this.showResultsSheet()},onBlur:function(){this.hideResultsSheet()},setRelativeActiveLocale:function(a){this.$activeLocale&&(a=this.$activeLocale.parent()[a]().children("a"),a.length&&(this.$activeLocale.removeClass("hover"),a.addClass("hover"),this.$activeLocale=a))},checkInputVal:function(){if(this.inputVal!==(this.inputVal=this.$addLocaleInput.val())){var a=this.findMatchingLocales();if(a.length){a=a.sort(function(a,b){return a.length-b.length});this.showResultsSheet();
this.$resultsList.html("");for(var b=0;b<a.length;b++){var d=this.locales[a[b]],f=c("<li/>").appendTo(this.$resultsList),d=c('<a data-id="'+a[b]+'">'+d.name+" ("+a[b]+")</a>").appendTo(f);0==b&&(d.addClass("hover"),this.$activeLocale=d)}}else this.hideResultsSheet(),this.$activeLocale=null}},findMatchingLocales:function(){var a=[],b=Craft.asciiString(this.inputVal).match(Craft.Locales.wordRegex);if(b){for(var d=[],c=0;c<b.length;c++)d.push(RegExp("^"+b[c],"i"));for(var e in this.locales)if(!Craft.inArray(e,
this.selectedLocales)){b=!0;for(c=0;c<d.length;c++){for(var h=!1,g=0;g<this.locales[e].words.length;g++)if(-1!=this.locales[e].words[g].search(d[c])){h=!0;break}if(!h){b=!1;break}}b&&a.push(e)}}return a},showResultsSheet:function(){this.showingResultsSheet||(this.$resultsSheet||(this.$resultsSheet=c('<div id="addlocaleresults" class="menu" style="position: relative; margin: 0 1px;"/>').appendTo(this.$addLocaleField),this.$resultsList=c("<ul/>").appendTo(this.$resultsSheet),this.addListener(this.$resultsList,
"mousedown","addSelectedLocale")),this.$resultsSheet.show(),this.showingResultsSheet=!0)},hideResultsSheet:function(){this.showingResultsSheet&&(this.$resultsSheet.hide(),this.showingResultsSheet=!1)},addSelectedLocale:function(a){if(a)a=c(a.target);else{if(!this.$activeLocale)return;a=this.$activeLocale}this.hideResultsSheet();this.$addLocaleInput.val(this.$activeLocale.text()).prop("disabled",!0);this.$addLocaleSpinner.removeClass("hidden");var b=a.attr("data-id");Craft.postActionRequest("localization/addLocale",
{id:b},c.proxy(function(a,f){this.$addLocaleSpinner.addClass("hidden");if("success"==f)if(a.success){var e=c('<tr data-id="'+b+'" data-name="'+this.locales[b].name+'"><th scope="row" data-title="'+Craft.t("Name")+'" width="40%">'+this.locales[b].name+'</th><td data-title="'+Craft.t("Locale ID")+'">'+b+'</td><td class="thin"><a class="move icon" title="'+Craft.t("Reorder")+'"></a></td><td class="thin"><a class="delete icon" title="'+Craft.t("Delete")+'"></a></td></tr>');this.adminTable.addRow(e);this.selectedLocales.push(b);
this.$addLocaleInput.val("").prop("disabled",!1).trigger("keydown");this.checkInputVal();Craft.cp.displayNotice(Craft.t("New locale added."));Craft.cp.runPendingTasks()}else Craft.cp.displayError(Craft.t("Unable to add the new locale."))},this))}},{wordRegex:/[a-zA-Z]+/g})})(jQuery);

//# sourceMappingURL=locales.min.map
