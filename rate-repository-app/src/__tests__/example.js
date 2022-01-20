describe('Example', () => {
    it('works', () => {
        expect(1).toBe(1);
    });
});

// describe('Greeting', () => {
//     it('renders a greeting message based on the name prop', () => {
//         const { debug, getByText } = render(<Greeting name="Kalle" />);

//         debug();

//         expect(getByText('Hello Kalle!')).toBeDefined();
//     });
// });

// describe('Form', () => {
//     it('calls function provided by onSubmit prop after pressing the submit button', () => {
//         const onSubmit = jest.fn();
//         const { getByPlaceholderText, getByText } = render(<Form onSubmit={onSubmit} />);

//         fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
//         fireEvent.changeText(getByPlaceholderText('Password'), 'password');
//         fireEvent.press(getByText('Submit'));

//         expect(onSubmit).toHaveBeenCalledTimes(1);

//         // onSubmit.mock.calls[0][0] contains the first argument of the first call
//         expect(onSubmit.mock.calls[0][0]).toEqual({
//             username: 'kalle',
//             password: 'password',
//         });
//     });
// });