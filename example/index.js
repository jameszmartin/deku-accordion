/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Accordion from '../';

const items = [{
	content: <div>Content 1</div>,
	heading: 'Heading 1'
}, {
	content: <div>Content 2</div>,
	heading: 'Heading 2',
	active: true
}, {
	content: <div>Content 3</div>,
	heading: 'Heading 3',
	active: true
}];

const app = tree(
	<Accordion class='TestClass' items={items} multiple/>
);

render(app, document.body);
