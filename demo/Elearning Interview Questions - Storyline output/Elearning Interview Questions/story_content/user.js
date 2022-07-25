function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mFrPxyj2Fn":
        Script1();
        break;
  }
}

function Script1()
{
  // Set variables
var player = GetPlayer();

const answer1 = player.GetVar("TextEntry");
sessionStorage.setItem("answer1", answer1);

const answer2 = player.GetVar("TextEntry1");
sessionStorage.setItem("answer2", answer2);

const answer3 = player.GetVar("TextEntry2");
sessionStorage.setItem("answer3", answer3);

const answer4 = player.GetVar("TextEntry3");
sessionStorage.setItem("answer4", answer4);

const answer5 = player.GetVar("TextEntry4");
sessionStorage.setItem("answer5", answer5);

const answer6 = player.GetVar("TextEntry5");
sessionStorage.setItem("answer6", answer6);

const answer7 = player.GetVar("TextEntry6");
sessionStorage.setItem("answer7", answer7);

const answer8 = player.GetVar("TextEntry7");
sessionStorage.setItem("answer8", answer8);

const answer9 = player.GetVar("TextEntry8");
sessionStorage.setItem("answer9", answer9);

const answer10 = player.GetVar("TextEntry9");
sessionStorage.setItem("answer10", answer10);

const answer11 = player.GetVar("TextEntry10");
sessionStorage.setItem("answer11", answer11);

const answer12 = player.GetVar("TextEntry11");
sessionStorage.setItem("answer12", answer12);

const answer13 = player.GetVar("TextEntry12");
sessionStorage.setItem("answer13", answer13);

const answer14 = player.GetVar("TextEntry13");
sessionStorage.setItem("answer14", answer14);

const answer15 = player.GetVar("TextEntry14");
sessionStorage.setItem("answer15", answer15);

const answer16 = player.GetVar("TextEntry15");
sessionStorage.setItem("answer16", answer16);

// Print
window.open("print-this.html", "_blank");
}

