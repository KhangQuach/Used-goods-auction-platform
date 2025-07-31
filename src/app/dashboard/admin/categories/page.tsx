'use client'

import { useState } from 'react'

const initialCategories = [
  { id: 'C001', name: 'Điện tử' },
  { id: 'C002', name: 'Đồ gia dụng' },
  { id: 'C003', name: 'Thời trang' },
  { id: 'C004', name: 'Thể thao & Dã ngoại' },
]

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [newName, setNewName] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  const addCategory = () => {
    if (!newName.trim()) return
    const newId = 'C' + Math.floor(Math.random() * 10000).toString().padStart(3, '0')
    setCategories([...categories, { id: newId, name: newName }])
    setNewName('')
  }

  const updateCategory = (id: string, name: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name } : c))
    )
    setEditingId(null)
  }

  const deleteCategory = (id: string) => {
    if (confirm('Bạn có chắc muốn xoá danh mục này?')) {
      setCategories((prev) => prev.filter((c) => c.id !== id))
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Quản lý danh mục sản phẩm</h1>

      {/* Form thêm mới */}
      <div className="flex gap-2 items-end">
        <div className="form-control w-full max-w-xs">
          <label className="label">Tên danh mục mới</label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Ví dụ: Đồ điện tử"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addCategory}>
          Thêm
        </button>
      </div>

      {/* Bảng danh mục */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên danh mục</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>
                  {editingId === c.id ? (
                    <input
                      className="input input-sm input-bordered w-full"
                      value={c.name}
                      onChange={(e) => updateCategory(c.id, e.target.value)}
                      onBlur={() => setEditingId(null)}
                    />
                  ) : (
                    <span>{c.name}</span>
                  )}
                </td>
                <td className="flex gap-2">
                  <button className="btn btn-xs" onClick={() => setEditingId(c.id)}>
                    Sửa
                  </button>
                  <button className="btn btn-xs btn-outline btn-error" onClick={() => deleteCategory(c.id)}>
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
