import React from 'react';

export default (props) => (
    <div className="form-group row">
        <label
            htmlFor={props.id || null}
            className="col-md-4 col-form-label text-md-right"
        >
            {props.label}
        </label>

        <div className="col-md-6">
            <input
                type="email"
                className={["form-control", (props.error ? 'is-invalid' : '')].join(' ')}
                name="email"
                required
                {...props}
            />
            {props.error && (
                <span className="invalid-feedback" role="alert">
                    <strong>{props.error[0]}</strong>
                </span>
            )}
        </div>
    </div>
);
