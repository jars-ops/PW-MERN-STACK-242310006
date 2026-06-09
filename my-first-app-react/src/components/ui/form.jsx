import React from "react";

const LableTitle = ({ title, required }) => {
    return (
        <label className="form-label fw-semibold">
            {title} {required && <span className="text-danger">*</span>}
        </label>
    )
}

const TextInput = ({ title, required, ...props }) => {
    return (
        <div className="form-group mb-3">
            {title && <LableTitle title={title} required={required} />}
            <input
                type="text"
                required={required}
                className="form-control" 
                {...props} 
            />
        </div>
    )
}

const TextAreaInput = ({ title, required, ...props }) => {
    return (
        <div className="form-group mb-3">
            {title && <LableTitle title={title} required={required} />}
            <textarea
                required={required}
                className="form-control"
                {...props}
            />
        </div>
    )
}

const InputCheckbox = ({ title, value, required, is_switch = false, ...props }) => {
    return (
        <div className="form-group mb-3">
            {title && <LableTitle title={title} required={required} />}
            <div className={`form-check ${is_switch ? 'form-switch' : ''}`} style={{ minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    role={is_switch ? "switch" : ""}
                    {...props}
                />
                <label className="form-check-label ms-2 opacity-75">
                    {value}
                </label>
            </div>
        </div>
    )
}

const InputImage = ({ title, imagePreview, required, ...props }) => {
    return (
        <div className="form-group mb-3">
            {title && <LableTitle title={title} required={required} />}
            <input
                type="file"
                className="form-control"
                id="coverImage"
                name="coverImage"
                accept="image/*"
                required={required}
                {...props}
            />
            {imagePreview && (
                <div className="mt-2 p-1 border rounded d-inline-block bg-light">
                    <img
                        src={imagePreview}
                        alt="Cover Preview"
                        style={{ maxWidth: '110px', maxHeight: '150px', objectFit: 'cover' }}
                        className="rounded"
                    />
                </div>
            )}
        </div>
    )
}

export { TextInput, TextAreaInput, InputCheckbox, InputImage }