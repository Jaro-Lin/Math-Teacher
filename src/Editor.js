import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

const { TabPane } = Tabs;

const initialPanes = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
];

class editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: initialPanes[0].key,
            panes: initialPanes,
            content: [] ,
        };
    }
    newTabIndex = 2;

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: `Tab ${activeKey}`, content: `Content of Tab ${activeKey}`, key: activeKey });
        this.setState({
            panes: newPanes,
            activeKey,
            content: [] ,
        });
    };

    remove = targetKey => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        this.setState({
            panes: newPanes,
            activeKey: newActiveKey,
        });
    };

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        this.setState({ content });
    };

    handleSubmit(event) {
        alert("Text was submitted: " + this.state.content);
        event.preventDefault();
    }

    render() {
        const { panes, activeKey } = this.state;
        return ( <
            Tabs type = "editable-card"
            onChange = { this.onChange }
            activeKey = { activeKey }
            onEdit = { this.onEdit } > {
                panes.map(pane => (
                <TabPane tab = { pane.title }
                    key = { pane.key }
                    closable = { pane.closable } > { pane.content }
                    <Editor
                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                        initialValue=""
                        value={this.state.content}
                        init={{
                            height: 500,
                            menubar: true,
                            resize: true,
                            media_live_embeds: true,
                            autosave_ask_before_unload: true,
                            powerpaste_allow_local_images: true,
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author',
                            spellchecker_dialog: true,
                            spellchecker_whitelist: ['Ephox', 'Moxiecode'],
                            image_title: true,
                            automatic_uploads: false,
                            images_upload_url: 'postAcceptor.php',
                            a11y_advanced_options: true,
                            mediaembed_service_url: 'SERVICE_URL',
                            mediaembed_max_width: 450,
                            powerpaste_word_import: 'prompt',
                            powerpaste_html_import: 'prompt',
                            menu: {
                                tc: {
                                    title: 'TinyComments',
                                    items: 'addcomment showcomments deleteallconversations'
                                },
                                format: {
                                    title: 'Format',
                                    items: 'checklist | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'
                                },

                            },
                            tiny_pageembed_classes: [
                                { text: 'Big embed', value: 'my-big-class' },
                                { text: 'Small embed', value: 'my-small-class' }
                            ],
                            plugins: [
                                'code tinymcespellchecker link',
                                'searchreplace',
                                'media mediaembed',
                                'a11ychecker advcode advlist anchor autolink codesample fullscreen help image imagetools',
                                'lists link media noneditable powerpaste preview',
                                'searchreplace table template tinymcespellchecker visualblocks wordcount',
                                'pageembed code preview',
                                'lists checklist',
                                'paste tinycomments',
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks advcode fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | a11ycheck formatselect | checklist pageembed code preview searchreplace | bold italic backcolor | mybutton | addcomment showcomments| alignleft aligncenter alignright alignjustify | spellchecker language spellcheckdialog | bullist numlist outdent indent | image link media | removeformat | help',
                            setup: function (editor) {
                                /* Menu items are recreated when the menu is closed and opened, so we need
                                   a variable to store the toggle menu item state. */
                                var i = 0;
                                /* example, adding a toolbar menu button */
                                editor.ui.registry.addMenuButton('mybutton', {
                                    text: 'Add Choice',
                                    fetch: function (callback) {
                                        i++;
                                        var items = [
                                            {
                                                type: 'menuitem',
                                                text: 'FillBlank',
                                                onAction: function () {
                                                    editor.insertContent('<input type="text" id="FB" name="FB">');
                                                }
                                            },
                                            {
                                                type: 'nestedmenuitem',
                                                text: 'SingleChoice',
                                                getSubmenuItems: function () {
                                                    return [
                                                        {
                                                            type: 'menuitem',
                                                            text: 'TorF',
                                                            onAction: function () {
                                                                editor.insertContent('<div id="'+i+'">&nbsp;<label for="T">True. </label>&nbsp;<input type="radio" id="T" name="TorF" value="true"><br>' +
                                                                    '&nbsp;<label for="F">False. </label><input type="radio" id="F" name="TorF" value="false">');
                                                            }
                                                        },
                                                        {
                                                            type: 'menuitem',
                                                            text: '4thChoices',
                                                            onAction: function () {
                                                                editor.insertContent('<div id="'+i+'">&nbsp;<label for="S4A">A. </label><input type="radio" id="S4A" name="4thChoices" value="A"><br>' +
                                                                    '&nbsp;<label for="S4B">B. </label><input type="radio" id="S4B" name="4thChoices" value="B"><br>' +
                                                                    '&nbsp;<label for="S4C">C. </label><input type="radio" id="S4C" name="4thChoices" value="C"><br>' +
                                                                    '&nbsp;<label for="S4D">D. </label><input type="radio" id="S4D" name="4thChoices" value="D">');
                                                            }
                                                        }
                                                    ];
                                                }
                                            },
                                            {
                                                type: 'nestedmenuitem',
                                                text: 'MultiChoices',
                                                getSubmenuItems: function () {
                                                    return [
                                                        {
                                                            type: 'menuitem',
                                                            text: '4thChoices',
                                                            onAction: function () {
                                                                editor.insertContent('<div id="'+i+'">&nbsp;<label for="M4A">A. </label><input type="checkbox" id="M4A" name="4thChoices" value="A"><br>' +
                                                                    '&nbsp;<label for="M4B">B. </label><input type="checkbox" id="M4B" name="4thChoices" value="B"><br>' +
                                                                    '&nbsp;<label for="M4C">C. </label><input type="checkbox" id="M4C" name="4thChoices" value="C"><br>' +
                                                                    '&nbsp;<label for="M4D">D. </label><input type="checkbox" id="M4D" name="4thChoices" value="D">');
                                                            }
                                                        },
                                                        {
                                                            type: 'menuitem',
                                                            text: '5thChoices',
                                                            onAction: function () {
                                                                editor.insertContent('<div id="'+i+'">&nbsp;<label for="M5A">A. </label><input type="checkbox" id="M5A" name="5thChoices" value="A"><br>' +
                                                                    '&nbsp;<label for="M5B">B. </label><input type="checkbox" id="M5B" name="5thChoices" value="B"><br>' +
                                                                    '&nbsp;<label for="M5C">C. </label><input type="checkbox" id="M5C" name="5thChoices" value="C"><br>' +
                                                                    '&nbsp;<label for="M5D">D. </label><input type="checkbox" id="M5D" name="5thChoices" value="D"><br>' +
                                                                    '&nbsp;<label for="M5E">E. </label><input type="checkbox" id="M5E" name="5thChoices" value="E">');
                                                            }
                                                        }
                                                    ];
                                                }
                                            },
                                        ];
                                        callback(items);
                                    }
                                });
                            },
                        }}
                        onEditorChange={this.handleEditorChange}
                    />
                    <div dangerouslySetInnerHTML={{ __html: this.state.content }} onClick={()=> this.props.history.push({
                        pathname: 'home/quizs',
                        state: {content: this.state.content},
                    })}>
                    </div>
                </TabPane>
                ))
            }
            </Tabs>
        );
    }
}
export default editor;