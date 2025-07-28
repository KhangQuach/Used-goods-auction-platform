'use client'

import { useState } from 'react'

const mockMessages = [
  { id: 1, sender: 'buyer', content: 'Chào anh, sản phẩm còn không ạ?' },
  { id: 2, sender: 'seller', content: 'Chào bạn, vẫn còn bạn nhé!' },
  { id: 3, sender: 'buyer', content: 'Giao ở TP.HCM được không ạ?' },
  { id: 4, sender: 'seller', content: 'Có giao nha bạn, ship COD luôn!' },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (!newMessage.trim()) return
    setMessages([...messages, { id: Date.now(), sender: 'buyer', content: newMessage }])
    setNewMessage('')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] p-4">
      <h1 className="text-2xl font-bold mb-4">Trò chuyện với người bán</h1>

      {/* Khung tin nhắn */}
      <div className="flex-1 overflow-y-auto space-y-2 bg-base-200 p-4 rounded-box">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat ${msg.sender === 'buyer' ? 'chat-end' : 'chat-start'}`}
          >
            <div className="chat-bubble">{msg.content}</div>
          </div>
        ))}
      </div>

      {/* Nhập tin nhắn */}
      <div className="mt-4 flex gap-2">
        <input
          className="input input-bordered flex-1"
          placeholder="Nhập tin nhắn..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          Gửi
        </button>
      </div>
    </div>
  )
}
