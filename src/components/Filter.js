import React from 'react'

const Filter = ({ search, onSearchChange, fourStarOnly, onCheckChange }) => {

  return (
    <div className="card">
      <h2>Filter Spices</h2>
      <div className="filters">
        <div>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search By Tasting Notes..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
        <label>
          4 Star Only <input
            type="checkbox"
            value={fourStarOnly}
            onChange={onCheckChange}
          />
        </label>
      </div>
    </div>
  )
};

//! class Filter extends React.Component {

//   render() {
//     return (
//       <div className="card">
//         <h2>Filter Spices</h2>
//         <div className="filters">
//           <div>
//             <label>Search: </label>
//             <input
//               type="text"
//               placeholder="Search By Tasting Notes..."
//               value={this.props.search}
//               onChange={e => console.log(e.target.value) /* TODO: update search state in parent component */}
//             />
//           </div>
//           <label>
//             4 Star Only <input
//               type="checkbox"
//               value={this.props.fourStarOnly}
//               onChange={e => console.log(e.target.checked) /* TODO: update fourStarOnly state in parent component */}
//             />
//           </label>
//         </div>
//       </div>
//     )
//   }
// }

export default Filter