import React, { useState } from 'react';

const NewSpice = ({ addNewSpice }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const newSpice = {
      id: Math.floor(Math.random() * 100) + 100,
      title,
      image,
      notes,
      description
    }
    addNewSpice(newSpice);
  }

  return (
    <div className="card">
      <h2>New Spice</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="title">Title: </label>
        <input 
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <label htmlFor="notes">Tasting Notes: </label>
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <label htmlFor="notes">Description: </label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

}

//! class NewSpice extends React.Component {
//   state = {
//     title: "",
//     image: "",
//     notes: "",
//     description: "",
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     console.log("submitting...")
//   }

//   render() {
//     return (
//       <div className="card">
//         <h2>New Spice</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="title">Title: </label>
//           <input type="text" name="title" />
//           <label htmlFor="image">Image URL: </label>
//           <input type="text" name="image" />
//           <label htmlFor="notes">Tasting Notes: </label>
//           <input type="text" name="notes" />
//           <label htmlFor="notes">Description: </label>
//           <textarea type="text" name="description" />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

export default NewSpice