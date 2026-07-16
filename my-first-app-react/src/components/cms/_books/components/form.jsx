"use client";

import React, { useState } from "react";
import { TextInput, TextAreaInput, InputCheckbox, InputImage } from "@/components/ui/form";

export default function BookForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    is_free: false,
    sinopsis: "",
    story: ""
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ ...formData, coverImage });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <div className="row">
        <div className="col-md-6">
          <TextInput
            title="Book Title"
            name="title"
            placeholder="Masukkan judul buku..."
            required={true}
            value={formData.title}
            onChange={handleChange}
          />
          <InputCheckbox
            title="Type Book"
            value="Is Free"
            is_switch={true}
            name="is_free"
            checked={formData.is_free}
            onChange={(e) => setFormData((prev) => ({ ...prev, is_free: e.target.checked }))}
          />
          <TextAreaInput
            title="Sinopsis"
            name="sinopsis"
            placeholder="Tuliskan sinopsis ringkas..."
            rows={4}
            required={true}
            value={formData.sinopsis}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <TextInput
            title="Author Name"
            name="author"
            placeholder="Masukkan nama penulis..."
            required={true}
            value={formData.author}
            onChange={handleChange}
          />
          <InputImage
            title="Cover Image"
            imagePreview={imagePreview}
            required={true}
            onChange={handleImageChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TextAreaInput
            title="Story"
            name="story"
            placeholder="Tuliskan isi cerita lengkap di sini..."
            rows={5}
            required={true}
            value={formData.story}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4 pt-3 border-top border-secondary">
        <button 
          type="button" 
          className="btn btn-sm btn-outline-secondary px-4" 
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-sm btn-primary px-4"
        >
          Submit Book
        </button>
      </div>
    </form>
  );
}