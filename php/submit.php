<?php

if(isset($_POST['submit'])){

// email information

    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "hapanamambod@africau.edu";

//  Headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

// Send email

mail($to, $subject, $message, $number, $headers);

// mail sent successfully

echo "<script>
alert('Thank you for contacting us. We will get back to you soon. ')
</script>";

}

?>