<!DOCTYPE html>
<html>

<head>
    <title>Liên hệ mới</title>
</head>

<body>
    <h2>Bạn nhận được tin nhắn mới từ Portfolio:</h2>
    <p><strong>Họ tên:</strong> {{ $data['name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>
    <p><strong>Nội dung:</strong></p>
    <p style="background-color: #f3f3f3; padding: 15px;">
        {{ $data['message'] }}
    </p>
</body>

</html>
