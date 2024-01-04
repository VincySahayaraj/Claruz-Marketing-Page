<?php
	
$conn = mysqli_connect("localhost", "root", "", "claruz") or die("Connection Error: " . mysqli_error($conn));
$result = mysqli_query($conn, "SELECT Id,Name,Email,Phone,Message,AddedDate FROM claruzform ORDER BY Id Desc");


?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link rel="manifest" href="site.webmanifest" />
    <!-- Place favicon.ico in the root directory -->
    <!-- icon -->
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="icon" href="assets/images/fav-ecesis.svg" sizes="16x16" />
    <!-- CSS here -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  
    <link rel="stylesheet" href="assets/css/animate.min.css" />
   
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome.css" />
  
    <link rel="stylesheet" href="assets/css/default.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.css" />
  
    <!-- new fonts -->
    <link rel="stylesheet" href="assets/new-fonts/font.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/responsive.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/css/new-responsive.css" />
      <title>ECESIS | CONTACT US Leads</title>
  </head>
   <body>
    <main class="contact_us_wrapper">
        <div class="container pt-5 pb-5">
             <h1>Leads</h1>
             <table class="table table-bordered">
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>PhoneNo</th>
                         <th>Message</th>
                         <th>AddedDate</th>
                     </tr>
                 </thead>
                 <tbody>
                     <?php
                     while ($row = mysqli_fetch_row($result)) { ?>
                     <tr>
                        
                         <td><?=$row[1] ?></td>
                         <td><?=$row[2] ?></td>
                         <td><?=$row[3] ?></td>
                         <td><?=$row[4] ?></td>
                         <td><?=$row[5] ?></td>
                      
                     </tr>
   <?php   }
                     ?>
                     
                 </tbody>
             </table>
        </div>
       
        
        </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
   
  </body>
</html>