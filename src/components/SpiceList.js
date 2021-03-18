import React, { useState } from 'react';
import SpiceItem from './SpiceItem';
import Filter from './Filter';

const SpiceList = ({ spices }) => {
  const [search, setSearch] = useState('');
  const [fourStarOnly, setFourStarOnly] = useState(false);

  const onSearchChange = val => {
    setSearch(val);
  }

  const onCheckChange = () => {
    setFourStarOnly(!fourStarOnly);
  }

  const renderSpices = () => {
    return spices
      .filter(spice => fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ));
  };

  return (
    <section className="spice-list">
      <Filter 
        search={search}
        onSearchChange={onSearchChange}
        fourStarOnly={fourStarOnly}
        onCheckChange={onCheckChange}
      />
      {renderSpices()}
    </section>
  );

}

//! class SpiceList extends React.Component {
//   state = {
//     fourStarOnly: false,
//     search: ""
//   }

//   renderSpices() {
//     return this.props.spices
//       .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
//       .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
//       .map(spice => (
//         <SpiceItem key={spice.id} spice={spice} />
//       ))
//   }

//   render() {
//     return (
//       <section className="spice-list">
//         <Filter search={this.state.search} fourStarOnly={this.state.fourStarOnly} />
//         {this.renderSpices()}
//       </section>
//     )
//   }
// }

export default SpiceList