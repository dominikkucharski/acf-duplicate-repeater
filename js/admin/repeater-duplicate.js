!function(e){function t(t){var a=t.attr("data-id"),i="acfcloneindex",n="-"+a+"-",c="["+a+"]";t.attr("data-id",i),t.find('[id*="'+a+'"]').each(function(){e(this).attr("id",e(this).attr("id").replace(n,"-acfcloneindex-"))}),t.find('[name*="'+a+'"]').each(function(){e(this).attr("name",e(this).attr("name").replace(c,"[acfcloneindex]"))}),t.find('label[for*="'+a+'"]').each(function(){e(this).attr("for",e(this).attr("for").replace(n,"-acfcloneindex-"))}),t.find("textarea.wp-editor-area").each(function(){e(this).attr("id","acf-editor-"+acf.get_uniqid())})}function a(t,a){t.find(".acf-field-wysiwyg").each(function(){var t=e(this).find(".tmce-active textarea.wp-editor-area"),i=t.html(),n=a.find('[data-key="'+e(this).attr("data-key")+'"]');e(this).html(n.html()),e(this).find("textarea.wp-editor-area").html(i)}),t.find(".acf-field-color-picker").each(function(){var t=e(this).find('[type="hidden"]'),i=t.val(),n=a.find('[data-key="'+e(this).attr("data-key")+'"]');e(this).html(n.html()),e(this).find('[type="hidden"]').val(i).next().val(i)})}var i=acf_duplicate_repeater.options,n=e.extend({},acf.fields.repeater),c=e.extend({},acf.fields.flexible_content);acf.fields.flexible_content=acf.fields.flexible_content.extend({events:{'click [data-name="duplicate-layout"]':"_duplicate"},render:function(){var t;return t=c.render.apply(this,arguments),this.$values.children(".layout").each(function(t){e(this).find(".acf-fc-layout-controlls").prepend(i.duplicate_flexible_btn)}),t},_duplicate:function(e){var i,n,c;n=e.$el.closest(".layout"),i=n.attr("data-layout"),c=n.clone(),t(c),a(c,this.$clones.children('.layout[data-layout="'+i+'"]')),c.attr("data-layout","_duplicate").appendTo(this.$clones),this.add("_duplicate",n),c.remove()},get_me:function(){console.log(this)}}),acf.fields.repeater=acf.fields.repeater.extend({events:{'click a[data-event="duplicate-row"]':"_duplicate"},render:function(){var t;return t=n.render.apply(this,arguments),this.$tbody.children().each(function(t){e(this).find("> td.remove").append(i.duplicate_repeater_btn)}),t},_duplicate:function(i){var n,c,d,l,r;return i.$el.hasClass("acf-icon")&&(c=i.$el.closest(".acf-row")),n=this.$clone,d=c.clone(),l=e("<table />").appendTo("body").append(d),t(d),a(d,c.closest(".acf-table").find("tr.acf-clone")),this.$clone={$el:d,search:"acfcloneindex",replace:!1},c.find(".acf-field-wysiwyg").each(function(t,a){e(this)}),r=this.add(c),this.$clone=n,l.remove(),r}})}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVyLWR1cGxpY2F0ZS5qcyJdLCJuYW1lcyI6WyIkIiwicmVzZXRfaWRzIiwiJGVsIiwiaWQiLCJhdHRyIiwibmV3X2lkIiwic2VhcmNoX2lkIiwic2VhcmNoX25hbWUiLCJmaW5kIiwiZWFjaCIsInRoaXMiLCJyZXBsYWNlIiwiYWNmIiwiZ2V0X3VuaXFpZCIsInJlc2V0X2ZpZWxkcyIsIiRjbG9uZV90ZW1wbGF0ZSIsIiR0ZXh0YXJlYSIsInJ0ZV92YWx1ZSIsImh0bWwiLCIkdGhpc19jbG9uZSIsIiRpbnB1dCIsImNvbG9yX3ZhbHVlIiwidmFsIiwibmV4dCIsIm9wdGlvbnMiLCJhY2ZfZHVwbGljYXRlX3JlcGVhdGVyIiwib3JpZ19yZXBlYXRlciIsImV4dGVuZCIsImZpZWxkcyIsInJlcGVhdGVyIiwib3JpZ19mbGV4aWJsZV9jb250ZW50IiwiZmxleGlibGVfY29udGVudCIsImV2ZW50cyIsImNsaWNrIFtkYXRhLW5hbWU9XCJkdXBsaWNhdGUtbGF5b3V0XCJdIiwicmVuZGVyIiwicmV0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCIkdmFsdWVzIiwiY2hpbGRyZW4iLCJpIiwicHJlcGVuZCIsImR1cGxpY2F0ZV9mbGV4aWJsZV9idG4iLCJfZHVwbGljYXRlIiwiZSIsImxheW91dCIsIiRiZWZvcmUiLCIkY2xvbmUiLCJjbG9zZXN0IiwiY2xvbmUiLCIkY2xvbmVzIiwiYXBwZW5kVG8iLCJhZGQiLCJyZW1vdmUiLCJnZXRfbWUiLCJjb25zb2xlIiwibG9nIiwiY2xpY2sgYVtkYXRhLWV2ZW50PVwiZHVwbGljYXRlLXJvd1wiXSIsIiR0Ym9keSIsImFwcGVuZCIsImR1cGxpY2F0ZV9yZXBlYXRlcl9idG4iLCIkcHJldl9jbG9uZSIsIiRyb3ciLCIkdGVtcGxhdGUiLCIkdG1wIiwiJGNvcHkiLCJoYXNDbGFzcyIsInNlYXJjaCIsImVsIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFVQSxHQU1ULFFBQVNDLEdBQVdDLEdBQ25CLEdBQUlDLEdBQUtELEVBQUlFLEtBQUssV0FDakJDLEVBQVMsZ0JBQ1RDLEVBQWEsSUFBSUgsRUFBRyxJQUVwQkksRUFBZSxJQUFJSixFQUFHLEdBR3ZCRCxHQUFJRSxLQUFLLFVBQVdDLEdBR3BCSCxFQUFJTSxLQUFLLFNBQVdMLEVBQUssTUFBTU0sS0FBSyxXQUNuQ1QsRUFBRVUsTUFBTU4sS0FBSyxLQUFNSixFQUFFVSxNQUFNTixLQUFLLE1BQU1PLFFBQVNMLEVBUmpDLHNCQVlmSixFQUFJTSxLQUFLLFdBQWFMLEVBQUssTUFBTU0sS0FBSyxXQUNyQ1QsRUFBRVUsTUFBTU4sS0FBSyxPQUFRSixFQUFFVSxNQUFNTixLQUFLLFFBQVFPLFFBQVNKLEVBWHBDLHNCQWVoQkwsRUFBSU0sS0FBSyxlQUFpQkwsRUFBSyxNQUFNTSxLQUFLLFdBQ3pDVCxFQUFFVSxNQUFNTixLQUFLLE1BQU9KLEVBQUVVLE1BQU1OLEtBQUssT0FBT08sUUFBU0wsRUFsQm5DLHNCQXFCZkosRUFBSU0sS0FBSywyQkFBMkJDLEtBQUssV0FDeENULEVBQUVVLE1BQU1OLEtBQU0sS0FBTSxjQUFnQlEsSUFBSUMsZ0JBSTFDLFFBQVNDLEdBQWNaLEVBQUthLEdBRzNCYixFQUFJTSxLQUFLLHNCQUFzQkMsS0FBSyxXQUNuQyxHQUFJTyxHQUFZaEIsRUFBRVUsTUFBTUYsS0FBSyx3Q0FDNUJTLEVBQVlELEVBQVVFLE9BQ3RCQyxFQUFjSixFQUFnQlAsS0FBSyxjQUFlUixFQUFFVSxNQUFNTixLQUFLLFlBQWEsS0FFN0VKLEdBQUVVLE1BQU1RLEtBQU1DLEVBQVlELFFBRTFCbEIsRUFBRVUsTUFBTUYsS0FBSywyQkFBMkJVLEtBQU1ELEtBSy9DZixFQUFJTSxLQUFLLDJCQUEyQkMsS0FBSyxXQUN4QyxHQUFJVyxHQUFTcEIsRUFBRVUsTUFBTUYsS0FBSyxtQkFDekJhLEVBQWNELEVBQU9FLE1BQ3JCSCxFQUFjSixFQUFnQlAsS0FBSyxjQUFlUixFQUFFVSxNQUFNTixLQUFLLFlBQWEsS0FFN0VKLEdBQUVVLE1BQU1RLEtBQU1DLEVBQVlELFFBRTFCbEIsRUFBRVUsTUFBTUYsS0FBSyxtQkFBbUJjLElBQUtELEdBQWNFLE9BQU9ELElBQUtELEtBekRqRSxHQUFJRyxHQUFVQyx1QkFBdUJELFFBQ3BDRSxFQUFnQjFCLEVBQUUyQixVQUFZZixJQUFJZ0IsT0FBT0MsVUFDekNDLEVBQXdCOUIsRUFBRTJCLFVBQVlmLElBQUlnQixPQUFPRyxpQkE2RGxEbkIsS0FBSWdCLE9BQU9HLGlCQUFtQm5CLElBQUlnQixPQUFPRyxpQkFBaUJKLFFBQ3pESyxRQUNDQyx1Q0FBd0MsY0FFekNDLE9BQVEsV0FFUCxHQUFJQyxFQVNKLE9BUEFBLEdBQU1MLEVBQXNCSSxPQUFPRSxNQUFPMUIsS0FBTTJCLFdBR2hEM0IsS0FBSzRCLFFBQVFDLFNBQVMsV0FBVzlCLEtBQUssU0FBVStCLEdBQy9DeEMsRUFBRVUsTUFBTUYsS0FBSyw0QkFBNEJpQyxRQUFTakIsRUFBUWtCLDBCQUdwRFAsR0FFUlEsV0FBWSxTQUFVQyxHQUNyQixHQUFJQyxHQUNIQyxFQUNBQyxDQUdERCxHQUFVRixFQUFFMUMsSUFBSThDLFFBQVEsV0FFeEJILEVBQVNDLEVBQVExQyxLQUFNLGVBRXZCMkMsRUFBU0QsRUFBUUcsUUFFakJoRCxFQUFXOEMsR0FFWGpDLEVBQWNpQyxFQUFRckMsS0FBS3dDLFFBQVFYLFNBQVMsd0JBQTBCTSxFQUFTLE9BRS9FRSxFQUFPM0MsS0FBTSxjQUFlLGNBQWUrQyxTQUFTekMsS0FBS3dDLFNBRXpEeEMsS0FBSzBDLElBQUssYUFBY04sR0FFeEJDLEVBQU9NLFVBR1JDLE9BQU8sV0FDTkMsUUFBUUMsSUFBSTlDLFNBSWRFLElBQUlnQixPQUFPQyxTQUFXakIsSUFBSWdCLE9BQU9DLFNBQVNGLFFBQ3pDSyxRQUNDeUIsc0NBQXVDLGNBR3hDdkIsT0FBUSxXQUVQLEdBQUlDLEVBU0osT0FQQUEsR0FBTVQsRUFBY1EsT0FBT0UsTUFBTzFCLEtBQU0yQixXQUd4QzNCLEtBQUtnRCxPQUFPbkIsV0FBVzlCLEtBQUssU0FBUytCLEdBQ3BDeEMsRUFBRVUsTUFBTUYsS0FBSyxlQUFlbUQsT0FBUW5DLEVBQVFvQywwQkFHdEN6QixHQUdSUSxXQUFZLFNBQVVDLEdBRXJCLEdBQUlpQixHQUVIQyxFQUNBQyxFQUFXQyxFQUNYQyxDQXdDRCxPQW5DSXJCLEdBQUUxQyxJQUFJZ0UsU0FBUyxjQUNsQkosRUFBT2xCLEVBQUUxQyxJQUFJOEMsUUFBUSxhQUl0QmEsRUFBY25ELEtBQUtxQyxPQUVuQmdCLEVBQVlELEVBQUtiLFFBQ2pCZSxFQUFPaEUsRUFBRSxhQUFhbUQsU0FBUyxRQUFRUSxPQUFRSSxHQUUvQzlELEVBQVc4RCxHQUVYakQsRUFBY2lELEVBQVdELEVBQUtkLFFBQVEsY0FBY3hDLEtBQUssaUJBR3pERSxLQUFLcUMsUUFDSjdDLElBQVM2RCxFQUNUSSxPQUFXLGdCQUNYeEQsU0FBWSxHQUdibUQsRUFBS3RELEtBQUssc0JBQXNCQyxLQUFLLFNBQVUrQixFQUFHNEIsR0FDcENwRSxFQUFFVSxRQUloQnVELEVBQVF2RCxLQUFLMEMsSUFBS1UsR0FHbEJwRCxLQUFLcUMsT0FBU2MsRUFDZEcsRUFBS1gsU0FLRVksTUFNUEkiLCJmaWxlIjoicmVwZWF0ZXItZHVwbGljYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xuXHR2YXIgb3B0aW9ucyA9IGFjZl9kdXBsaWNhdGVfcmVwZWF0ZXIub3B0aW9ucyxcblx0XHRvcmlnX3JlcGVhdGVyID0gJC5leHRlbmQoIHt9LCBhY2YuZmllbGRzLnJlcGVhdGVyICksXG5cdFx0b3JpZ19mbGV4aWJsZV9jb250ZW50ID0gJC5leHRlbmQoIHt9LCBhY2YuZmllbGRzLmZsZXhpYmxlX2NvbnRlbnQgKTtcblxuXG5cdGZ1bmN0aW9uIHJlc2V0X2lkcyggJGVsICkge1xuXHRcdHZhciBpZCA9ICRlbC5hdHRyKCdkYXRhLWlkJyksXG5cdFx0XHRuZXdfaWQgPSAnYWNmY2xvbmVpbmRleCcsXG5cdFx0XHRzZWFyY2hfaWRcdFx0PSAnLScraWQrJy0nLFxuXHRcdFx0cmVwbGFjZV9pZFx0XHQ9ICctJytuZXdfaWQrJy0nLFxuXHRcdFx0c2VhcmNoX25hbWUgXHQ9ICdbJytpZCsnXScsXG5cdFx0XHRyZXBsYWNlX25hbWVcdD0gJ1snK25ld19pZCsnXSc7XG5cblx0XHQkZWwuYXR0cignZGF0YS1pZCcsIG5ld19pZCApO1xuXG5cdFx0Ly8gcmVwbGFjZSBpZHNcblx0XHQkZWwuZmluZCgnW2lkKj1cIicgKyBpZCArICdcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHRcblx0XHRcdCQodGhpcykuYXR0cignaWQnLCAkKHRoaXMpLmF0dHIoJ2lkJykucmVwbGFjZSggc2VhcmNoX2lkLCByZXBsYWNlX2lkICkgKTtcblx0XHR9KTtcblxuXHRcdC8vIHJlcGxhY2UgbmFtZXNcblx0XHQkZWwuZmluZCgnW25hbWUqPVwiJyArIGlkICsgJ1wiXScpLmVhY2goZnVuY3Rpb24oKXtcdFxuXHRcdFx0JCh0aGlzKS5hdHRyKCduYW1lJywgJCh0aGlzKS5hdHRyKCduYW1lJykucmVwbGFjZSggc2VhcmNoX25hbWUsIHJlcGxhY2VfbmFtZSApICk7XG5cdFx0fSk7XG5cblx0XHQvLyByZXBsYWNlIGxhYmVsIGZvclxuXHRcdCRlbC5maW5kKCdsYWJlbFtmb3IqPVwiJyArIGlkICsgJ1wiXScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdCQodGhpcykuYXR0cignZm9yJywgJCh0aGlzKS5hdHRyKCdmb3InKS5yZXBsYWNlKCBzZWFyY2hfaWQsIHJlcGxhY2VfaWQgKSApO1xuXHRcdH0pO1xuXG5cdFx0JGVsLmZpbmQoJ3RleHRhcmVhLndwLWVkaXRvci1hcmVhJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0JCh0aGlzKS5hdHRyKCAnaWQnLCAnYWNmLWVkaXRvci0nICsgYWNmLmdldF91bmlxaWQoKSApO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRfZmllbGRzKCAkZWwsICRjbG9uZV90ZW1wbGF0ZSApIHtcblxuXHRcdC8vIHJpY2ggdGV4dCBlZGl0b3Jcblx0XHQkZWwuZmluZCgnLmFjZi1maWVsZC13eXNpd3lnJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0ZXh0YXJlYSA9ICQodGhpcykuZmluZCgnLnRtY2UtYWN0aXZlIHRleHRhcmVhLndwLWVkaXRvci1hcmVhJyksXG5cdFx0XHRcdHJ0ZV92YWx1ZSA9ICR0ZXh0YXJlYS5odG1sKCksXG5cdFx0XHRcdCR0aGlzX2Nsb25lID0gJGNsb25lX3RlbXBsYXRlLmZpbmQoJ1tkYXRhLWtleT1cIicrICQodGhpcykuYXR0cignZGF0YS1rZXknKSArJ1wiXScpO1xuXG5cdFx0XHQkKHRoaXMpLmh0bWwoICR0aGlzX2Nsb25lLmh0bWwoKSApO1xuXG5cdFx0XHQkKHRoaXMpLmZpbmQoJ3RleHRhcmVhLndwLWVkaXRvci1hcmVhJykuaHRtbCggcnRlX3ZhbHVlICk7XG5cblx0XHR9KTtcblxuXHRcdC8vIGNvbG9yIHBpY2tlclxuXHRcdCRlbC5maW5kKCcuYWNmLWZpZWxkLWNvbG9yLXBpY2tlcicpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkaW5wdXQgPSAkKHRoaXMpLmZpbmQoJ1t0eXBlPVwiaGlkZGVuXCJdJyksXG5cdFx0XHRcdGNvbG9yX3ZhbHVlID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHQkdGhpc19jbG9uZSA9ICRjbG9uZV90ZW1wbGF0ZS5maW5kKCdbZGF0YS1rZXk9XCInKyAkKHRoaXMpLmF0dHIoJ2RhdGEta2V5JykgKydcIl0nKTtcblx0XHRcdFxuXHRcdFx0JCh0aGlzKS5odG1sKCAkdGhpc19jbG9uZS5odG1sKCkgKTtcblxuXHRcdFx0JCh0aGlzKS5maW5kKCdbdHlwZT1cImhpZGRlblwiXScpLnZhbCggY29sb3JfdmFsdWUgKS5uZXh0KCkudmFsKCBjb2xvcl92YWx1ZSApO1xuXG5cdFx0fSk7XG5cdH1cblx0XG5cblx0YWNmLmZpZWxkcy5mbGV4aWJsZV9jb250ZW50ID0gYWNmLmZpZWxkcy5mbGV4aWJsZV9jb250ZW50LmV4dGVuZCh7XG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHQnY2xpY2sgW2RhdGEtbmFtZT1cImR1cGxpY2F0ZS1sYXlvdXRcIl0nOiAnX2R1cGxpY2F0ZSdcblx0XHR9LFxuXHRcdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciByZXQ7XG5cblx0XHRcdHJldCA9IG9yaWdfZmxleGlibGVfY29udGVudC5yZW5kZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG5cdFx0XHQvLyB1cGRhdGUgb3JkZXIgbnVtYmVyc1xuXHRcdFx0dGhpcy4kdmFsdWVzLmNoaWxkcmVuKCcubGF5b3V0JykuZWFjaChmdW5jdGlvbiggaSApe1xuXHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5hY2YtZmMtbGF5b3V0LWNvbnRyb2xscycpLnByZXBlbmQoIG9wdGlvbnMuZHVwbGljYXRlX2ZsZXhpYmxlX2J0biApO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0XHRfZHVwbGljYXRlOiBmdW5jdGlvbiggZSApIHtcblx0XHRcdHZhciBsYXlvdXQsXG5cdFx0XHRcdCRiZWZvcmUsIFxuXHRcdFx0XHQkY2xvbmUsIFxuXHRcdFx0XHQkbGF5b3V0X3RlbXBsYXRlO1xuXG5cdFx0XHQkYmVmb3JlID0gZS4kZWwuY2xvc2VzdCgnLmxheW91dCcpO1xuXG5cdFx0XHRsYXlvdXQgPSAkYmVmb3JlLmF0dHIoICdkYXRhLWxheW91dCcgKTtcblxuXHRcdFx0JGNsb25lID0gJGJlZm9yZS5jbG9uZSgpO1xuXG5cdFx0XHRyZXNldF9pZHMoICRjbG9uZSApO1xuXG5cdFx0XHRyZXNldF9maWVsZHMoICRjbG9uZSwgdGhpcy4kY2xvbmVzLmNoaWxkcmVuKCcubGF5b3V0W2RhdGEtbGF5b3V0PVwiJyArIGxheW91dCArICdcIl0nKSApO1xuXG5cdFx0XHQkY2xvbmUuYXR0ciggJ2RhdGEtbGF5b3V0JywgJ19kdXBsaWNhdGUnICkuYXBwZW5kVG8odGhpcy4kY2xvbmVzKTtcblxuXHRcdFx0dGhpcy5hZGQoICdfZHVwbGljYXRlJywgJGJlZm9yZSApO1xuXG5cdFx0XHQkY2xvbmUucmVtb3ZlKCk7XG5cblx0XHR9LFxuXHRcdGdldF9tZTpmdW5jdGlvbigpe1xuXHRcdFx0Y29uc29sZS5sb2codGhpcyk7XG5cdFx0fVxuXHR9KTtcblxuXHRhY2YuZmllbGRzLnJlcGVhdGVyID0gYWNmLmZpZWxkcy5yZXBlYXRlci5leHRlbmQoe1xuXHRcdGV2ZW50czoge1xuXHRcdFx0J2NsaWNrIGFbZGF0YS1ldmVudD1cImR1cGxpY2F0ZS1yb3dcIl0nOiAnX2R1cGxpY2F0ZSdcblx0XHR9LFxuXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHJldDtcblxuXHRcdFx0cmV0ID0gb3JpZ19yZXBlYXRlci5yZW5kZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG5cdFx0XHQvLyB1cGRhdGUgb3JkZXIgbnVtYmVyc1xuXHRcdFx0dGhpcy4kdGJvZHkuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHQkKHRoaXMpLmZpbmQoJz4gdGQucmVtb3ZlJykuYXBwZW5kKCBvcHRpb25zLmR1cGxpY2F0ZV9yZXBlYXRlcl9idG4gKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHRfZHVwbGljYXRlOiBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0dmFyICRwcmV2X2Nsb25lLCBcblx0XHRcdFx0aWQsIHVuaXF1aWQsXG5cdFx0XHRcdCRyb3csIFxuXHRcdFx0XHQkdGVtcGxhdGUsICR0bXAsXG5cdFx0XHRcdCRjb3B5O1xuXHRcdFx0Ly8gdmFyc1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIGFkZCBiZWZvcmUgcm93XG5cdFx0XHRpZiggZS4kZWwuaGFzQ2xhc3MoJ2FjZi1pY29uJykgKSB7XG5cdFx0XHRcdCRyb3cgPSBlLiRlbC5jbG9zZXN0KCcuYWNmLXJvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrdXAgYWNmIGNsb25lIG9wdGlvbnNcblx0XHRcdCRwcmV2X2Nsb25lID0gdGhpcy4kY2xvbmU7XG5cblx0XHRcdCR0ZW1wbGF0ZSA9ICRyb3cuY2xvbmUoKTtcblx0XHRcdCR0bXAgPSAkKCc8dGFibGUgLz4nKS5hcHBlbmRUbygnYm9keScpLmFwcGVuZCggJHRlbXBsYXRlICk7XG5cblx0XHRcdHJlc2V0X2lkcyggJHRlbXBsYXRlICk7XG5cblx0XHRcdHJlc2V0X2ZpZWxkcyggJHRlbXBsYXRlLCAkcm93LmNsb3Nlc3QoJy5hY2YtdGFibGUnKS5maW5kKCd0ci5hY2YtY2xvbmUnKSApO1xuXG5cdFx0XHQvLyBmYWtlIGFjZi5jbG9uZSgpIGN1cnJlbnQgcm93XG5cdFx0XHR0aGlzLiRjbG9uZSA9IHtcblx0XHRcdFx0JyRlbCdcdFx0OiAkdGVtcGxhdGUsXG5cdFx0XHRcdCdzZWFyY2gnXHQ6ICdhY2ZjbG9uZWluZGV4Jyxcblx0XHRcdFx0J3JlcGxhY2UnXHQ6IGZhbHNlLFxuXHRcdFx0fTtcblxuXHRcdFx0JHJvdy5maW5kKCcuYWNmLWZpZWxkLXd5c2l3eWcnKS5lYWNoKGZ1bmN0aW9uKCBpLCBlbCApIHtcblx0XHRcdFx0dmFyICRmaWVsZCA9ICQodGhpcyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gbWFrZSBjb3B5XG5cdFx0XHQkY29weSA9IHRoaXMuYWRkKCAkcm93ICk7XG5cblx0XHRcdC8vIHJlc3RvcmUgYWNmIGNsb25lIG9wdGlvbnNcblx0XHRcdHRoaXMuJGNsb25lID0gJHByZXZfY2xvbmU7XG5cdFx0XHQkdG1wLnJlbW92ZSgpO1xuXG5cdFx0XHQvLyBpbml0IGZpZWxkc1xuXHRcdFx0Ly8qL1xuXHRcdFx0Ly8gZ2l2ZSB0aGUgY29weSBiYWNrXG5cdFx0XHRyZXR1cm4gJGNvcHk7XG5cblx0XHR9LFxuXHR9KTtcblx0XG5cbn0pKGpRdWVyeSkiXX0=
