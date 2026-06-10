$(document).ready(function() {

  const groupNames = {
	2: "Mascotte",
    3: "Infernaux",
    4: "Damné·e·s",
    5: "Suprêmes",
    6: "Royauté",
    7: "Péchés capitaux",
    8: "Déchu·e·s",
    9: "Anomalies",
  };

  $('.lithium-vb_posttracker').each(function() {

    var $tracker = $(this);

    var $pseudo = $tracker.find('.lithium-vb_postname span[class*="group-"]');
    if (!$pseudo.length) return;

    var match = $pseudo.attr('class').match(/group-(\d+)/);
    if (!match) return;

    var groupId = match[1];

    var groupName = groupNames[groupId] || "";
    var groupColor = $pseudo.css("color") || "#666";

    var $rankDiv = $tracker.find('.lithium-vb_rank');
    var $groupLabel = $rankDiv.find('.group-label');

    if ($groupLabel.length) {
      $groupLabel.text(groupName);
    }

    var pseudoText = $pseudo.text().trim();
    var pseudoLength = pseudoText.length;
    var isShortPseudo = pseudoLength >= 3 && pseudoLength <= 7;

    $pseudo.removeClass("short-pseudo long-pseudo");

    $pseudo.css({
      "color": groupColor,
      "background": "none",
      "display": "inline-block"
    });

    if (isShortPseudo) {
      $pseudo.addClass("short-pseudo");
    } else {
      $pseudo.addClass("long-pseudo");
    }

  });

});
