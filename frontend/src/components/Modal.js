import React from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    const CustomModal = (props) => {
        const [activeItem, setActiveItem] = React.useState(props.activeItem)
    
        const handleChange = (e) => {
            let {name, value} = e.target
                if (e.target.type === "checkbox") {
                    value = e.target.checked;
                }
                const item = {...activeItem, [name]: value}
                setActiveItem(item)
        }
    
        const {toggle, onSave} = props;
    
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                value={activeItem.title}
                                onChange={handleChange}
                                placeholder="Enter Todo title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={activeItem.description}
                                onChange={handleChange}
                                placeholder="Enter Todo description"
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label for="completed">
                            <Input
                            type="checkbox"
                            name="completed"
                            checked={activeItem.completed}
                            onChange={handleChange}
                            />
                            Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="success" onClick={() => onSave(activeItem)}>
                    Save
                </Button>
                </ModalFooter>
            </Modal>
        )
    
}
    
export default CustomModal;