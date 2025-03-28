import React, { useState, useEffect } from 'react';
import axios from "axios"; // if needed for API calls
import { Modal, Button } from 'react-bootstrap'; // import Modal and Button from react-bootstrap
import './App.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Simulated fetching of items (can be replaced with an API call)
  useEffect(() => {
    const fetchItems = [
      { id: 1, title: "Microwave", description: "Adjacent to Evans Library and Annex", location: "Commons Hall" },
      { id: 2, title: "Vending Machine", description: "Adjacent to Evans Library and Annex", location: "Evans Library" },
    ];
    setItems(fetchItems);
  }, []);

  // Handler when an item is clicked
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Handler to close the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className='item-container'>
      <h2>Items Found</h2>
      <div className='items-list'>
        {items.map((item) => (
          <div 
            key={item.id} 
            className='item-card' 
            onClick={() => handleItemClick(item)}
            style={{cursor: 'pointer'}} // indicates the item is clickable
          >
            <div className='item-header'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className='item-location'>
              <strong>Location:</strong> {item.location}
            </div>     
          </div>
        ))}
      </div>

      {/* Modal from boostrap for displaying item details */}
      {selectedItem && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Description:</strong> {selectedItem.description}</p>
            <p><strong>Location:</strong> {selectedItem.location}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ItemList;