<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactNotification;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate dữ liệu (Kỹ năng quan trọng)
        $validated = $request->validate([
            'name' => 'required|min:2|max:50',
            'email' => 'required|email',
            'message' => 'required|min:10',
        ], [
            'name.required' => 'Vui lòng nhập tên của bạn.',
            'email.email' => 'Email không hợp lệ.',
            'message.min' => 'Nội dung tin nhắn quá ngắn.',
        ]);

        // 2. Lưu vào Database
        Contact::create($validated);

        Mail::to(env('MAIL_USERNAME'))->send(new ContactNotification($validated));

        // 3. Quay lại trang cũ kèm thông báo thành công
        return redirect()->back()->with('success', 'Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất.');
    }
}
