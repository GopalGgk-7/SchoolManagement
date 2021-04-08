app.controller("menu2Ctrl", function ($scope) {
    $scope.isSub = false;
    $scope.clickFunction = function (type) {
        if (type == "Subject") {
            $scope.isSub = true;
        } else if (type == "Home") {
            $scope.isSub = false;
        }
    };

    $scope.DownloadPdfForm = function (type) {

        if (type == "Scholarship") {
            window.open("pdf/scholarship/Scholarships.pdf");
        } else if (type == "Tamil") {
            window.open("pdf/12th-subject/Std12-Tamil.pdf");
        } else if (type == "English") {
            window.open("pdf/12th-subject/Std12-English.pdf");
        } else if (type == "Std12-Maths-EM-1") {
            window.open("pdf/12th-subject/Std12-Maths-EM-1.pdf");
        } else if (type == "Std12-Maths-EM-2") {
            window.open("pdf/12th-subject/Std12-Maths-EM-2.pdf");
        } else if (type == "Std12-Phy-EM-1") {
            window.open("pdf/12th-subject/Std12-Phy-EM-1.pdf");
        } else if (type == "Std12-Phy-EM-2") {
            window.open("pdf/12th-subject/Std12-Phy-EM-2.pdf");
        } else if (type == "Std12-Hist-EM") {
            window.open("pdf/12th-subject/Std12-Hist-EM.pdf");
        } else if (type == "Std12-Geog-EM") {
            window.open("pdf/12th-subject/Std12-Geog-EM.pdf");
        } else if (type == "Std12-Econ-EM") {
            window.open("pdf/12th-subject/Std12-Econ-EM.pdf");
        } else if (type == "Std12-Comm-EM") {
            window.open("pdf/12th-subject/Std12-Comm-EM.pdf");
        } else if (type == "Std12-Chem-EM-1") {
            window.open("pdf/12th-subject/Std12-Chem-EM-1.pdf");
        } else if (type == "Std12-Chem-EM-2") {
            window.open("pdf/12th-subject/Std12-Chem-EM-2.pdf");
        } else if (type == "Std12-CS-EM") {
            window.open("pdf/12th-subject/Std12-CS-EM.pdf");
        } else if (type == "Std12-BioZoo-EM") {
            window.open("pdf/12th-subject/Std12-BioZoo-EM.pdf");
        } else if (type == "Std12-BioChem-EM") {
            window.open("pdf/12th-subject/Std12-BioChem-EM.pdf");
        } else if (type == "Std12-BioBot-EM") {
            window.open("pdf/12th-subject/Std12-BioBot-EM.pdf");
        } else if (type == "Std12-BM-EM") {
            window.open("pdf/12th-subject/Std12-BM-EM.pdf");
        } else if (type == "Std12-Acct-EM") {
            window.open("pdf/12th-subject/Std12-Acct-EM.pdf");
        }

    }




    $scope.DownloadPdfNovels = function (type) {
        if (type == "Ambedkar") {
            window.open("pdf/Novals/selected work of Dr B Rambedkar.pdf");
        } else if (type == "peter-and-wendy") {
            window.open("pdf/Novals/peter-and-wendy.pdf");
        } else if (type == "english-fairy-tales") {
            window.open("pdf/Novals/english-fairy-tales.pdf");
        } else if (type == "Wings of Fire_ an autobiograph - A P J Abdul Kalam_3873") {
            window.open("pdf/Novals/Wings of Fire_ an autobiograph - A P J Abdul Kalam_3873.pdf");
        } else if (type == "The_Time_Machine_NT") {
            window.open("pdf/Novals/The_Time_Machine_NT.pdf");
        } else if (type == "The-Three-Little-Pigs-L1") {
            window.open("pdf/Novals/The-Three-Little-Pigs-L1.pdf");
        } else if (type == "Tales of Space and Time - HG Wells - PDF") {
            window.open("pdf/Novals/Tales of Space and Time - HG Wells - PDF.pdf");
        } else if (type == "Swamiji Biography") {
            window.open("pdf/Novals/Swamiji Biography.pdf");
        } else if (type == "Schatzinsel_E") {
            window.open("pdf/Novals/Schatzinsel_E.pdf");
        } else if (type == "Mother_Teresa_-_Caring_For_The_Worlds_Poor") {
            window.open("pdf/Novals/Mother_Teresa_-_Caring_For_The_Worlds_Poor.pdf");
        } else if (type == "DSIL_Lib_E1312881157") {
            window.open("pdf/Novals/DSIL_Lib_E1312881157.pdf");
        } else if (type == "Charlotte_s_Web_") {
            window.open("pdf/Novals/Charlotte_s_Web_.pdf");
        } else if (type == "An-Autobiography") {
            window.open("pdf/Novals/An-Autobiography.pdf");
        } else if (type == "Alice_in_Wonderland") {
            window.open("pdf/Novals/Alice_in_Wonderland.pdf");
        } else if (type == "Alexender the Great By Jacob Abbott") {
            window.open("pdf/Novals/Alexender the Great By Jacob Abbott.pdf");
        } else if (type == "030-BULLY-BILL-Free-Childrens-Book-By-Monkey-Pen") {
            window.open("pdf/Novals/030-BULLY-BILL-Free-Childrens-Book-By-Monkey-Pen.pdf");
        } else if (type == "029-JIMMYS-FIRST-DAY-OF-SCHOOL-Free-Childrens-Book-By-Monkey-Pen") {
            window.open("pdf/Novals/029-JIMMYS-FIRST-DAY-OF-SCHOOL-Free-Childrens-Book-By-Monkey-Pen.pdf");
        } else if (type == "028-THE-WAY-OF-THE-WOODS-Free-Childrens-Book-By-Monkey-Pen") {
            window.open("pdf/Novals/028-THE-WAY-OF-THE-WOODS-Free-Childrens-Book-By-Monkey-Pen.pdf");
        } else if (type == "026-THE-HIKE-Free-Childrens-Book-By-Monkey-Pen (1)") {
            window.open("pdf/Novals/026-THE-HIKE-Free-Childrens-Book-By-Monkey-Pen (1).pdf");
        } else if (type == "025-DRAGONS-Free-Childrens-Book-By-Monkey-Pen (1)") {
            window.open("pdf/Novals/025-DRAGONS-Free-Childrens-Book-By-Monkey-Pen (1).pdf");
        } else if (type == "023-A-DOG-ON-A-LOG-Free-Childrens-Book-By-Monkey-Pen (2)") {
            window.open("pdf/Novals/023-A-DOG-ON-A-LOG-Free-Childrens-Book-By-Monkey-Pen (2).pdf");
        }
    }

    $scope.DownloadPdfQB = function (type) {
        if (type == "6651 Tamil Paper I") {
            window.open("pdf/12th-2017/6651 Tamil Paper I.pdf");
        } else if (type == "6661 Tamil Paper II") {
            window.open("pdf/12th-2017/6661 Tamil Paper II.pdf");
        } else if (type == "6671 English Paper I") {
            window.open("pdf/12th-2017/6671 English Paper I.pdf");
        } else if (type == "6672 English Paper II") {
            window.open("pdf/12th-2017/6672 English Paper II.pdf");
        } else if (type == "6673 Tam Eng Mathematics") {
            window.open("pdf/12th-2017/6673 Tam Eng Mathematics.pdf");
        } else if (type == "6678 Tam Eng Physics") {
            window.open("pdf/12th-2017/6678 Tam Eng Physics.pdf");
        } else if (type == "6683 Tam Eng Chemistry") {
            window.open("pdf/12th-2017/6683 Tam Eng Chemistry.pdf");
        } else if (type == "6688 Tam Eng Biology") {
            window.open("pdf/12th-2017/6688 Tam Eng Biology.pdf");
        } else if (type == "6693 Tam Eng Botany") {
            window.open("pdf/12th-2017/6693 Tam Eng Botany.pdf");
        } else if (type == "6698 Tam Eng Zoology") {
            window.open("pdf/12th-2017/6698 Tam Eng Zoology.pdf");
        } else if (type == "6703 Tam Eng History") {
            window.open("pdf/12th-2017/6703 Tam Eng History.pdf");
        } else if (type == "6713 Tam Eng Commerce") {
            window.open("pdf/12th-2017/6713 Tam Eng Commerce.pdf");
        } else if (type == "6718 Tam Eng Accountancy-1") {
            window.open("pdf/12th-2017/6718 Tam Eng Accountancy-1.pdf");
        } else if (type == "6728 Tam Eng Business Maths") {
            window.open("pdf/12th-2017/6728 Tam Eng Business Maths.pdf");
        } else if (type == "6729 Tam Eng Geography") {
            window.open("pdf/12th-2017/6729 Tam Eng Geography.pdf");
        } else if (type == "6733 Tam Eng Computer Science") {
            window.open("pdf/12th-2017/6733 Tam Eng Computer Science.pdf");
        } else if (type == "6708 Tam Eng Economics") {
            window.open("pdf/12th-2017/6708 Tam Eng Economics.pdf");
        }
    };

    $scope.calanderForm = function () {
        window.open("pdf/Timetable/school-calendar-2021-2022-landscape.pdf");
    };


});


