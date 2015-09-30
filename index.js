/** @jsx dom */

import dom from 'virtual-element'; // eslint-disable-line no-unused-vars
import deku from 'deku';

const app = deku.tree(
    <div>App!</div>
);

deku.render(app, document.getElementById('app'));
