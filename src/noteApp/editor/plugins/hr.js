import { Quill } from 'react-quill';


const BlockEmbed = Quill.import('blots/block/embed');

class HorizontalRule extends BlockEmbed {}

HorizontalRule.blotName = 'hr';
HorizontalRule.tagName = 'hr';

export default HorizontalRule;
