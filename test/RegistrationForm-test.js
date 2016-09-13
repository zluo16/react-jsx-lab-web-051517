const React = require('react');
const { shallow } = require('enzyme');

const RegistrationForm = require('../components/RegistrationForm');

describe('<RegistrationForm />', function () {
  const wrapper = shallow(<RegistrationForm />);

  it('should have the right tag', function () {
    expect(wrapper.type()).toEqual('form', (res) => `\`${res[1]}\` is not the right element tag.`);
  });

  it('should contain one text input', function () {
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('should contain one password input', function () {
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
  });

  it('should contain one submit button', function () {
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
  });
});
