app.controller("menu1Ctrl", function ($scope) {
    $scope.isSub = false;

    $scope.clickFunction = function (type) {
        if (type == "Subject") {
            $scope.isSub = true;
        } else if (type == "Home") {
            $scope.isSub = false;
        }

    };

    $scope.DownloadPdfForm = function (type) {

        if (type == "Tamil") {
            window.open("pdf/subject/Tamil_book.pdf");
        } else if (type == "English") {
            window.open("pdf/subject/English_book.pdf");
        } else if (type == "Maths") {
            window.open("pdf/subject/Maths_book.pdf");
        } else if (type == "Science") {
            window.open("pdf/subject/Science_book.pdf");
        } else if (type == "SocialScience") {
            window.open("pdf/subject/SocialScience_book.pdf");
        } else if (type == "Scholarship") {
            window.open("pdf/scholarship/Scholarships.pdf");
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
        if (type == "2017_Tamil_1") {
            window.open("pdf/10th-2017/6801 Tamil Paper I.pdf");
        } else if (type == "2017_Tamil_2") {
            window.open("pdf/10th-2017/6811 Tamil Paper II.pdf");
        } else if (type == "2017_English_1") {
            window.open("pdf/10th-2017/6821 English Paper I.pdf");
        } else if (type == "2017_English_2") {
            window.open("pdf/10th-2017/6822 English Paper II.pdf");
        } else if (type == "2017_Maths") {
            window.open("pdf/10th-2017/6823 TamEng Mathematics.pdf");
        } else if (type == "2017_Science") {
            window.open("pdf/10th-2017/6830 TamEng Science.pdf");
        } else if (type == "2017_SocialScience") {
            window.open("pdf/10th-2017/6837 TamEng Social Science.pdf");
        } else if (type == "2018_Tamil_1") {
            window.open("pdf/10th-2018/Tamil Paper I.pdf");
        } else if (type == "2018_Tamil_2") {
            window.open("pdf/10th-2018/7961 Tamil Paper II.pdf");
        } else if (type == "2018_English_1") {
            window.open("pdf/10th-2018/7971 English Paper I.pdf");
        } else if (type == "2018_English_2") {
            window.open("pdf/10th-2018/7972 English Paper II.pdf");
        } else if (type == "2018_Maths") {
            window.open("pdf/10th-2018/7973 Tam_Eng Mathematics (1).pdf");
        } else if (type == "2018_Science") {
            window.open("pdf/10th-2018/Tamil_english_Science.pdf");
        } else if (type == "2018_SocialScience") {
            window.open("pdf/10th-2018/7987 Tamil_English_Social Science.pdf");
        }

    }


});


