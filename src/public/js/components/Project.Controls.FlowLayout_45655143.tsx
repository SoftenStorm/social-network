// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper';
import {CodeHelper} from '../helpers/CodeHelper';
import {EventHelper} from '../helpers/EventHelper';
import {HTMLHelper} from '../helpers/HTMLHelper';
import {AnimationHelper} from '../helpers/AnimationHelper';
import {TestHelper} from '../helpers/TestHelper';
import {SourceType, HierarchicalDataTable, HierarchicalDataRow} from '../helpers/DataManipulationHelper';
import {loc as $loc} from '../helpers/LocalizationHelper';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base as $Base} from './Base';

// Assign to an another one to override the base class.
// 
let Base: any = $Base;

// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;
let loc = $loc;

/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
	source: SourceType;
	group: string;
  rows: HierarchicalDataRow[];
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
}*/
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState { 
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_45655143 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    TestHelper.identify();
    function ready(a){"loading"!=document.readyState?a(new Event('ready')):document.addEventListener?document.addEventListener("DOMContentLoaded",a):(document.onreadystatechange=function(e){"complete"==document.readyState&&a(e)})};
        
    DataManipulationHelper.register("66766b99", "insert", ["03168663","13c65096","18091a36","382a7358","4d487443","53063929","5a318376"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"Post\""); }});
    DataManipulationHelper.register("281067ca", "delete", ["5469cbc2"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"Post\""); }});
    DataManipulationHelper.register("cc4b29ed", "delete", ["5469cbc2"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"Post\""); }});
    DataManipulationHelper.register("2d118a73", "delete", ["d8e0e5e5"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"Post\""); }});
    DataManipulationHelper.register("1e7a237e", "insert", ["056d8987","3279b55a","44b75d96","503dd98d","5e9d4311","833bdb5e","99046765"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"Post[\" + (i) + \"].Reply\""); }});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    // This is an example of creating a static collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const staticCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: [{
        keys: {...}
        columns: {...}
        relations: {...}
      },
      ...]
    };
    this.state.data['collection'] = staticCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  protected componentWillReceiveProps(nextProps: any): void {
    // This is an example of creating a dynamic collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const dynamicCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: nextProps.items.map((item) => {
        return {
          keys: {...}
          columns: {...}
          relations: {...}
        };
      })
    };
    this.state.data['collection'] = dynamicCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false, always: boolean=false): any {
    // Redirect the target by overriding the notation value, for example:
    // 
    // notation = `collection[${notation.split(',')[1]}].collection`;
    //
    
    return super.getDataFromNotation(notation, inArray, always);
  }
  
  private isUser(uid): boolean {
    return uid == this.getDataFromNotation('Info.uid');
  }
  
  // Auto[Merging]--->
  protected onTextboxKeyPress_53063929(event: Event) {

    // Handle the event of onTextboxKeyPress (firstname) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const keyboardEvent = event as KeyboardEvent;
    
    if (keyboardEvent.which == 13) {
      const control1 = ReactDOM.findDOMNode(this.refs.post);
      control1.click();
      
      return EventHelper.cancel(event);
    }
    
  }

  protected onTextboxKeyPress_056d8987(event: Event) {

    // Handle the event of onTextboxKeyPress (firstname) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const keyboardEvent = event as KeyboardEvent;
    
    if (keyboardEvent.which == 13) {
      const control1 = ReactDOM.findDOMNode(this.refs.reply);
      control1.click();
      
      return EventHelper.cancel(event);
    }
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'MsFlexDirection': 'column', 'WebkitFlexDirection': 'column', 'flexDirection': 'column', 'height': '100vh', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="internal-fsb-element internal-fsb-inverse internal-fsb-strict-layout " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="45655143")
        .internal-fsb-element.internal-fsb-strict-layout(style={'FsbBackgroundType': 'linear', 'WebkitFlexShrink': '1', 'borderBottomColor': 'rgba(0, 43, 255, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'flexShrink': '1', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="837621b0")
          .internal-fsb-element(style={'color': 'rgba(0, 43, 255, 1)', 'fontSize': '18px', 'paddingBottom': '5px', 'paddingLeft': '15px', 'paddingRight': '15px', 'paddingTop': '5px', 'textAlign': 'center'}, internal-fsb-guid="4d102860")
            | Social Quote
        .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsFlexWrap': 'nowrap', 'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'WebkitFlexWrap': 'nowrap', 'flexBasis': '0px', 'flexGrow': '1', 'flexWrap': 'nowrap', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="10a1ee6a")
          .col-3.internal-fsb-element.internal-fsb-strict-layout(style={'borderRightColor': 'rgba(0, 43, 255, 1)', 'borderRightStyle': 'solid', 'borderRightWidth': '1px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="a2677289")
          .col-9.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '30px', 'paddingRight': '30px', 'paddingTop': '15px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="c6060bb4")
            .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '15px', 'paddingLeft': '0px', 'paddingRight': '0px', 'position': 'sticky', 'top': '0px', 'zIndex': '1000'}, internal-fsb-class="FlowLayout", internal-fsb-guid="3ae1734a")
              .col-12.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="53063929")
                textarea.form-control.form-control-sm(style={'FsbCodeLock': '1', 'display': 'block', 'width': '100%'}, onKeyPress=this.onTextboxKeyPress_53063929.bind(this), placeholder="คุณต้องการบอกอะไรกับชาวโลก?", required=true, rows="2", type="text")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="18091a36")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="13c65096")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="4d487443")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="5a318376")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="382a7358")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="03168663")
              Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, ref="post", onClick=((event) => { window.internalFsbSubmit('66766b99', 'Post', event, ((results) => { this.manipulate('66766b99', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="66766b99")
                .internal-fsb-element(internal-fsb-guid="66766b99-text")
                  | Submit
            .internal-fsb-element.internal-fsb-strict-layout(style={'MsFlexDirection': 'row-reverse', 'WebkitFlexDirection': 'row-reverse', 'flexDirection': 'row-reverse', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ac036c3a")
              each data, i in this.getDataFromNotation("Post", true, false)
                .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '20px', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-class="FlowLayout", internal-fsb-guid="166e6ba0")
                  .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="0713c8ad")
                    .internal-fsb-element(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'hidden', 'WebkitBorderRadius': '100px 100px 100px 100px', 'background': 'rgba(245, 245, 245, 1)', 'borderRadius': '100px 100px 100px 100px', 'height': '75px', 'overflowX': 'hidden', 'overflowY': 'hidden', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '75px'}, internal-fsb-guid="8d2ed478")
                      .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="cc344be8")
                        img(style={'display': 'block', 'height': '100%', 'padding': '0px', 'ratio': '1:1', 'width': '100%'}, internalFsbRatioFit="true")
                        img(style={'display': 'none'}, internalFsbRatioExpand="true", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC")
                    .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="247b6c15")
                      .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'WebkitAlignContent': 'space-between', 'alignContent': 'space-between', 'marginBottom': '10px', 'minHeight': '75px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="b2ae447c")
                        .col-12.internal-fsb-element(style={'fontSize': '14px', 'paddingLeft': '15px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].message")))}, internal-fsb-guid="62369e5c")
                        .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="887e3d09")
                          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '15px', 'paddingRight': '0px'}, internal-fsb-guid="29674a6c")
                            | #{this.getDataFromNotation("Post[" + i + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].createdAt")}
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="5469cbc2")
                          if this.isUser(data.columns["uid"])
                            Button.-fsb-self-281067ca.btn.btn-sm.internal-fsb-element(onClick=((event) => { window.internalFsbSubmit('281067ca', 'Post', event, ((results) => { this.manipulate('281067ca', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="281067ca")
                              .-fsb-self-281067ca-text.internal-fsb-element(style={'FsbReusableId': '281067ca-text', 'FsbReusableName': '', 'borderBottomColor': 'rgba(212, 212, 212, 1)', 'borderBottomStyle': 'none', 'borderLeftColor': 'rgba(212, 212, 212, 1)', 'borderLeftStyle': 'none', 'borderRightColor': 'rgba(212, 212, 212, 1)', 'borderRightStyle': 'none', 'borderTopColor': 'rgba(212, 212, 212, 1)', 'borderTopStyle': 'none'}, internal-fsb-guid="281067ca-text")
                                | ลบ
                        .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="64d4b2bb")
                          if this.isUser(data.columns["uid"])
                            Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexBasis': '50px', 'flexBasis': '50px', 'fontSize': '13px', 'marginLeft': '15px'}, onClick=((event) => { window.internalFsbSubmit('cc4b29ed', 'Post', event, ((results) => { this.manipulate('cc4b29ed', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="cc4b29ed")
                              .internal-fsb-element(internal-fsb-guid="38be6125")
                                | ชื่นชอบ
                          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '15px', 'paddingRight': '0px'}, internal-fsb-guid="ac71a3c1")
                            | จำนวนผู้ที่ชื่นชอบ @{this.getTotalAction(i, 0)}
                      .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitBorderRadius': '4px 4px 4px 4px', 'background': 'rgba(247, 247, 247, 1)', 'borderRadius': '4px 4px 4px 4px', 'paddingBottom': '15px', 'paddingLeft': '15px', 'paddingRight': '15px', 'paddingTop': '10px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="bb841183")
                        each data, j in this.getDataFromNotation("Post[" + i + "].Reply", true, false)
                          .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || j), data-fsb-index=j, internal-fsb-class="FlowLayout", internal-fsb-guid="d766b7e5")
                            .col-12.internal-fsb-element(style={'fontSize': '14px', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].Reply[" + j + "].message")))}, internal-fsb-guid="58566a77")
                            .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="5d3c67d6")
                              .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="6dee4a09")
                                | #{this.getDataFromNotation("Post[" + i + "].Reply[" + j + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].Reply[" + j + "].createdAt")}
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].Reply[" + j + "].id"), internal-fsb-guid="d8e0e5e5")
                              if this.isUser(data.columns["uid"])
                                Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexBasis': '50px', 'flexBasis': '50px', 'fontSize': '13px'}, onClick=((event) => { window.internalFsbSubmit('2d118a73', 'Reply', event, ((results) => { this.manipulate('2d118a73', 'Reply', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="2d118a73")
                                  .internal-fsb-element(internal-fsb-guid="6984244d")
                                    | ลบ
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="503dd98d")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="44b75d96")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="3279b55a")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="99046765")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="5e9d4311")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="833bdb5e")
                        .col-12.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="056d8987")
                          input.form-control.form-control-sm(style={'FsbCodeLock': '1', 'display': 'block', 'marginTop': '15px', 'width': '100%'}, onKeyPress=this.onTextboxKeyPress_056d8987.bind(this), placeholder="คุณมีความเห็นอย่างไร?", required=true, type="text")
                        Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, ref="reply", onClick=((event) => { window.internalFsbSubmit('1e7a237e', 'Reply', event, ((results) => { this.manipulate('1e7a237e', 'Reply', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="1e7a237e")
                          .internal-fsb-element(internal-fsb-guid="2b90cb54")
                            | Submit
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_45655143', FlowLayout_45655143);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.