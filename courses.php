<?php
session_start();
$conn = new mysqli("localhost", "username", "password", "lms");

if (!isset($_SESSION['user_id'])) {
   header("Location: login.php");
   exit();
}

$courses = [];
$result = $conn->query("SELECT * FROM courses");
while ($row = $result->fetch_assoc()) {
   $courses[] = $row;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Courses</title>
</head>
<body>

<h2>Your Courses:</h2>

<ul id="course-list">
   <?php foreach ($courses as $course): ?>
       <li><?php echo htmlspecialchars($course['title']); ?> - <?php echo htmlspecialchars($course['description']); ?></li>
   <?php endforeach; ?>
</ul>

<a href="logout.php">Logout</a>

</body>
</html>