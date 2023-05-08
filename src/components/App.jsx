import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import phoneIcon from '../images/phone-icon.png';
import { Container, Logo, Icon, SectionTitle, Wrapper } from './Styles.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts
        .map(contact => contact.name.toLowerCase())
        .includes(normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterHandler = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const sortedContacts = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Logo href="">
          <Icon src={phoneIcon} alt="phone icon" />
          <h1>Phonebook</h1>
        </Logo>

        <ContactForm onSubmit={this.addContact} />
        <Wrapper>
          <SectionTitle>Contacts</SectionTitle>
          <Filter filter={filter} onChange={this.filterHandler} />
        </Wrapper>
        <ContactList
          contactsArray={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}