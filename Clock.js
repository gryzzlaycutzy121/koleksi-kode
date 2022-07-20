<!DOCTYPE html>

<html>

<head>

<title>Membuat Jam Digital di Situs dengan kode JavaScript - AFRIZAL_EDTRz121</title>

</head>

<body>

<center>

    <h1>Sekarang menunjukkan waktu pukul :</h1> 

    <h1 style="font-size: 120px; font-family: arial;" id="jam"></h1>

</center>

</body>

</html>

 

<script type="text/javascript">

    window.onload = function() { jam(); }

   

    function jam() {

     var e = document.getElementById('jam'),

     d = new Date(), h, m, s;

     h = d.getHours();

     m = set(d.getMinutes());

     s = set(d.getSeconds());

   

     e.innerHTML = h +':'+ m +':'+ s;

   

     setTimeout('jam()', 1000);

    }

   

    function set(e) {

     e = e < 10 ? '0'+ e : e;

     return e;

    }

   </script>
