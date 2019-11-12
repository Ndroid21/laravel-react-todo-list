import React from 'react'

export default function AddItem() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Add New Item</div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className="col-form-label">Title</label>
                                    <input className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label className="col-form-label">Description</label>
                                    <textarea className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
