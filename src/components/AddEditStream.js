import React from 'react'

const AddEditStream = ({
    handleChange,
    handleDeleteStream,
    handleDeleteSubject,
    addMoreStream,
    addMoreSubjects,
    handleSubmit,
    setFormData,
    formData
}) => {
  return (
    <div>
         <button onClick={addMoreStream}>Add More Streams</button>
      {formData?.map((item, index) => (
        <div>
          <div className="d-flex">
            <input
              type="text"
              className="form-control mb-3"
              value={item?.stream}
              name="stream"
              onChange={(e) => handleChange(e, index)}
              placeholder="stream....."
            />

            <button onClick={() => handleDeleteStream(index)}>Delete</button>
          </div>

          <div className="ps-4">
            <div>Subjects</div>
            {item.subject.map((subject, subIndex) => (
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={subject}
                  onChange={(e) => handleChange(e, index, subIndex)}
                  placeholder="subject"
                />

                <button onClick={() => handleDeleteSubject(index, subIndex)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addMoreSubjects(index)}>
            Add More Subjects
          </button>
        </div>
      ))}

      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default AddEditStream
