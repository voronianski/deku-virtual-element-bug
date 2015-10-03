/** @jsx dom */

import dom from 'virtual-element'; // eslint-disable-line no-unused-vars
import deku from 'deku';

const MyComponent = {
    render(component) {
        const { props, state } = component;

        console.log(props); // children => []

        return (
            <div>
                {props.children}
            </div>
        );
    }
};

const Main = {
    render(component) {
        const { props } = component;
        return (
            <MyComponent {...props}>
                <div>Inner text</div>
            </MyComponent>
        );
    }
};


const App = deku.tree(
    <Main />
);

deku.render(App, document.getElementById('app'));
