
   <?php

     if(isset($_POST['submit']))
     {
        $nom=$_POST['name'];
        $mail=$_POST['email'];
        $objet=$_POST['subject'];
        $msg=$_POST['message'];

        if ($nom&&$mail&&$objet&&$msg){
                if (filter_var($mail,FILTER_VALIDATE_EMAIL))
            {

     $to  = 'sales@mazma.fr, a.hmaidouch@mazma.fr, contact@mazma.fr'; // notez la virgule

     // Sujet
     $subject = $objet;

     // message
     $message = "Nom: "."$nom"."\n"."Email: "."$mail"."\n"."Message: "."$msg";

     // En-têtes additionnels
     $headers = 'From:<'.$mail.'>'."\n";

     // Envoi
     //echo "<div>Your message has been sent. Thank you!</div>";
     $secret = "6LfiXTwiAAAAAPmX4ffgYmjrO9GieH3qft5wgzB0"; // KEY A CHANGER
     $response = $_POST['g-recaptcha-response'];
     $remoteip = $_SERVER['REMOTE_ADDR'];
     $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip";      $data = file_get_contents($url);
     $row = json_decode($data, true);

     if ($row['success'] == "true") {
       mail($to, $subject, $message, $headers);
       header("Location: contact-success.html");;
     }
     else {
         echo "<script>alert('Wrong Captcha, please try again');</script>";
     }
     }

}
}

?>