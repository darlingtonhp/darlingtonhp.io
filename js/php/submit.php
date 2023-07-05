<?php

if($_SERVER["REQUEST_METHOD" == "POST"]){

// email information

    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
    $number = filter_input(INPUT_POST, "number", FILTER_SANITIZE_SPECIAL_CHARS);
    $subject = filter_input(INPUT_POST, "subject", FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
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