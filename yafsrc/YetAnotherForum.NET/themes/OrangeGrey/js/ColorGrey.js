﻿jQuery(document).ready(function () { jQuery("img, input, a").tipTip(); if (!jQuery.browser.msie) { jQuery("img.avatarimage").load(function () { jQuery(this).wrap(function () { return '<span class="AvatarWrap" style="position:relative; display:inline-block; background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />'; }); jQuery(this).css("opacity", "0");});} else { if (jQuery.browser.version >= 9) { jQuery("img.avatarimage").load(function () { jQuery(this).wrap(function () { return '<span class="AvatarWrap" style="position:relative; display:inline-block; background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />'; }); jQuery(this).css("opacity", "0");});} } });