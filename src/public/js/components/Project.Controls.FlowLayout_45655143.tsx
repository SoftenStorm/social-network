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
  currentCommentBoxPID: string;
  currentReplyBoxCID: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  currentCommentBoxPID: null,
  currentReplyBoxCID: null
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
        
    DataManipulationHelper.register("c33d69b3", "upsert", ["036b8078","8b5b91d8","a1ce4a26","c8a316a1"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("66766b99", "insert", ["03168663","13c65096","18091a36","382a7358","4d487443","53063929","5a318376","cd9e964b","ea9b0569"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("281067ca", "delete", ["5469cbc2"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("cc4b29ed", "upsert", ["01e05bb0","82728a83","96cba469","b32deb04"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("dc261964", "insert", ["063e86b6","0a824160","0e6227b3","26652008","6c7eaab2","92426ec9","b5b68759","bec0942b","c43cb8c4"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("5d65c9a9", "delete", ["53b67855"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("47ebd056", "delete", ["924b8199"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("e0e69546", "insert", ["25ac372b","302e6b73","56a26b1d","87379be8","bc8dc2a4","ccd6346a","e976813d","ec906022"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
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
  
  private isUser(uid: string): boolean {
    return uid == this.getDataFromNotation('Info.uid');
  }
  
  private hasAnyReply(i: number): boolean {
    return this.getDataFromNotation('Post[' + i + '].Comment', true).length != 0;
  }
  
  private hasFondOf(i: number): boolean {
    const uid = this.getDataFromNotation('Info.uid');
    return this.getDataFromNotation('Post[' + i + '].Action', true).some(row => row.keys['uid'] == uid && row.columns['type'] == 1);
  }
  
  private getTotalAction(type: number, i: number): boolean {
    return this.getDataFromNotation('Post[' + i + '].Action', true).filter(row => row.columns['type'] == type).length;
  }
  
  private isQuote(i: number): boolean {
    return this.getDataFromNotation('Post[' + i + '].isQuote');
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

  protected onButtonSuccess_66766b99(event: CustomEvent) {

    // Handle the event of onButtonSuccess ([post] create) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    const control1 = ReactDOM.findDOMNode(this.refs.message);
    control1.value = '';
    
  }

  protected onTextboxKeyPress_6c7eaab2(event: Event) {

    // Handle the event of onTextboxKeyPress (firstname) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const keyboardEvent = event as KeyboardEvent;
    const target = EventHelper.getCurrentElement(event);
    
    if (keyboardEvent.which == 13) {
      this.state.currentCommentBoxPID = target.dataset.pid;
      
      const control1 = document.getElementById('comment-create-pid-' + target.dataset.pid);
      control1.click();
      
      return EventHelper.cancel(event);
    }
    
  }

  protected onButtonSuccess_dc261964(event: CustomEvent) {

    // Handle the event of onButtonSuccess ([comment] create) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    const element = document.getElementById('comment-box-pid-' + this.state.currentCommentBoxPID);
    (element as any).value = '';
    
  }

  protected onTextboxKeyPress_87379be8(event: Event) {

    // Handle the event of onTextboxKeyPress (firstname) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const keyboardEvent = event as KeyboardEvent;
    const target = EventHelper.getCurrentElement(event);
    
    if (keyboardEvent.which == 13) {
      this.state.currentReplyBoxCID = target.dataset.cid;
      
      const control1 = document.getElementById('reply-create-cid-' + target.dataset.cid);
      control1.click();
      
      return EventHelper.cancel(event);
    }
    
  }

  protected onButtonSuccess_e0e69546(event: CustomEvent) {

    // Handle the event of onButtonSuccess ([reply] create) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    const element = document.getElementById('reply-box-cid-' + this.state.currentReplyBoxCID);
    (element as any).value = '';
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'MsFlexDirection': 'column', 'MsFlexWrap': 'nowrap', 'WebkitFlexDirection': 'column', 'WebkitFlexWrap': 'nowrap', 'flexDirection': 'column', 'flexWrap': 'nowrap', 'height': '100vh', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="internal-fsb-element internal-fsb-inverse internal-fsb-stretch internal-fsb-strict-layout " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="45655143")
        .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitFlexShrink': '1', 'borderBottomColor': 'rgba(66, 117, 255, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '5px', 'flexShrink': '1', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="837621b0")
          .internal-fsb-element(style={'color': 'rgba(0, 43, 255, 1)', 'fontSize': '18px', 'fontWeight': '500', 'lineHeight': '20px', 'paddingBottom': '5px', 'paddingLeft': '15px', 'paddingRight': '15px', 'paddingTop': '5px', 'textAlign': 'center'}, internal-fsb-guid="4d102860")
            | MatchFlutter
          .internal-fsb-element(style={'color': 'rgba(77, 77, 77, 1)', 'display': 'inline-block', 'fontSize': '12px', 'fontWeight': '400', 'paddingBottom': '5px', 'paddingTop': '7px'}, internal-fsb-guid="2d1a5e27")
            | match workplace quotes that flutter you
        .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsFlexWrap': 'nowrap', 'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'WebkitFlexWrap': 'nowrap', 'flexBasis': '0px', 'flexGrow': '1', 'flexWrap': 'nowrap', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="10a1ee6a")
          .col-3.internal-fsb-element.internal-fsb-inverse.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsFlexDirection': 'column-reverse', 'MsOverflowY': 'auto', 'WebkitFlexDirection': 'column-reverse', 'WebkitJustifyContent': 'start', 'background': 'rgba(66, 117, 255, 1)', 'borderRightColor': 'rgba(0, 43, 255, 1)', 'borderRightWidth': '1px', 'flexDirection': 'column-reverse', 'justifyContent': 'start', 'overflowY': 'auto', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="a2677289")
            each data, i in this.getDataFromNotation("Post", true, false)
              if this.isQuote(i)
                .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '20px', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-class="FlowLayout", internal-fsb-guid="06261965")
                  .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="828a40e9")
                    .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '7px', 'paddingRight': '7px', 'paddingTop': '5px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="9a1c0da9")
                      .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsOverflowX': 'hidden', 'WebkitAlignContent': 'space-between', 'WebkitBorderRadius': '3px 3px 3px 3px', 'alignContent': 'space-between', 'background': 'rgba(255, 255, 255, 1)', 'borderBottomColor': 'rgba(255, 255, 255, 1)', 'borderBottomStyle': 'dashed', 'borderBottomWidth': '1px', 'borderLeftColor': 'rgba(255, 255, 255, 1)', 'borderLeftStyle': 'dashed', 'borderLeftWidth': '1px', 'borderRadius': '3px 3px 3px 3px', 'borderRightColor': 'rgba(255, 255, 255, 1)', 'borderRightStyle': 'dashed', 'borderRightWidth': '1px', 'borderTopColor': 'rgba(255, 255, 255, 1)', 'borderTopStyle': 'dashed', 'borderTopWidth': '1px', 'marginBottom': '10px', 'minHeight': '75px', 'overflowX': 'hidden', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '5px', 'width': '100%'}, internal-fsb-class="FlowLayout", internal-fsb-guid="67ec188c")
                        .internal-fsb-element(style={'fontSize': '14px', 'lineHeight': '1.15em', 'marginBottom': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'width': '100%'}, internal-fsb-guid="33303e95")
                          .internal-fsb-element(style={'color': 'rgba(181, 228, 255, 1)', 'display': 'inline', 'fontSize': '24px'}, internal-fsb-guid="906544b7")
                            | “
                          .internal-fsb-element(style={'color': 'rgba(77, 77, 77, 1)', 'display': 'inline', 'fontWeight': '500', 'paddingLeft': '5px', 'paddingRight': '5px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].message")))}, internal-fsb-guid="054e740a")
                          .internal-fsb-element(style={'FsbTransform': '0.00000000 -19.04762043 0.00000000 -1.00000000 0.00001000 0.00001000 1.00000000 1.00000000 1.00000000', 'MozTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'MsTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'WebkitTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'color': 'rgba(181, 228, 255, 1)', 'display': 'inline-block', 'fontSize': '24px', 'transform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)'}, internal-fsb-guid="4e62c042")
                            | ”
                        .internal-fsb-element.internal-fsb-strict-layout(style={'lineHeight': '1em', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="1caca464")
                          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '8px', 'fontStyle': 'italic', 'lineHeight': '1.15em', 'paddingLeft': '13px', 'paddingRight': '5px'}, internal-fsb-guid="28dec2ab")
                            | — #{this.getDataFromNotation("Post[" + i + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].User.lastName")}
                        .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '13px', 'paddingRight': '5px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="71221a4b")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="8b5b91d8")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="a1ce4a26")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.hasFondOf(i) ? '0' : '1', internal-fsb-guid="036b8078")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="c8a316a1")
                          Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexShrink': '1', 'flexShrink': '1', 'fontSize': '12px', 'paddingLeft': '5px', 'paddingRight': '5px', 'whiteSpace': 'nowrap', borderBottomColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderLeftColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderRightColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderTopColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})()}, onClick=((event) => { window.internalFsbSubmit('c33d69b3', 'Action', event, ((results) => { this.manipulate('c33d69b3', 'Action', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="c33d69b3")
                            .internal-fsb-element(style={'display': 'inline-block', color: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})()}, internal-fsb-guid="9750537b")
                              | ชื่นชอบ 
                            .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'display': 'inline-block', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '0px', 'paddingRight': '0px', color: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})()}, internal-fsb-guid="6872b365")
                              | #{this.getTotalAction(1, i)} คน
                            if this.hasFondOf(i)
                              .internal-fsb-element(style={'color': 'rgba(0, 94, 255, 1)', 'display': 'inline-block', 'marginLeft': '5px', 'position': 'relative', 'top': '-2px'}, dangerouslySetInnerHTML={__html: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-box2-heart-fill\" viewBox=\"0 0 16 16\">\n<path d=\"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z\"/>\n</svg>"}, internal-fsb-guid="e4a375ea")
          .col-9.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '30px', 'paddingRight': '30px', 'paddingTop': '15px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="c6060bb4")
            .internal-fsb-element.internal-fsb-strict-layout(style={'background': 'rgba(255, 255, 255, 1)', 'marginBottom': '15px', 'paddingBottom': '10px', 'paddingLeft': '0px', 'paddingRight': '0px', 'position': 'sticky', 'top': '0px', 'zIndex': '1000'}, internal-fsb-class="FlowLayout", internal-fsb-guid="3ae1734a")
              .col-12.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="53063929")
                textarea.form-control.form-control-sm(style={'FsbCodeLock': '1', 'WebkitBorderRadius': '3px 3px 3px 3px', 'borderRadius': '3px 3px 3px 3px', 'display': 'block', 'width': '100%'}, ref="message", onKeyPress=this.onTextboxKeyPress_53063929.bind(this), placeholder="คุณต้องการบอกอะไรกับชาวโลก?", required=true, rows="2", type="text")
              label.col-12.internal-fsb-element(style={'fontSize': '11px', 'marginTop': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="87337d62")
                .container-fluid
                  .internal-fsb-strict-layout.row
                    .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="cd9e964b")
                      input(style={'display': 'inline-block'}, type="checkbox")
                    .internal-fsb-element(style={'display': 'inline-block', 'lineHeight': '14px', 'paddingLeft': '5px'}, internal-fsb-guid="b8a27120")
                      | เพิ่มเข้าไปใน Social Quote
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="18091a36")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="13c65096")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="4d487443")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("id"), internal-fsb-guid="ea9b0569")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="5a318376")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="382a7358")
              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="03168663")
              Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, ref="post", onClick=((event) => { window.internalFsbSubmit('66766b99', 'Post', event, ((results) => { this.manipulate('66766b99', 'Post', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_66766b99.bind(this), internal-fsb-guid="66766b99")
                .internal-fsb-element(internal-fsb-guid="66766b99-text")
                  | Submit
            .internal-fsb-element.internal-fsb-inverse.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsFlexDirection': 'column-reverse', 'MsFlexWrap': 'wrap-reverse', 'WebkitFlexDirection': 'column-reverse', 'WebkitFlexWrap': 'wrap-reverse', 'flexDirection': 'column-reverse', 'flexWrap': 'wrap-reverse', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ac036c3a")
              each data, i in this.getDataFromNotation("Post", true, false)
                .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '20px', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-class="FlowLayout", internal-fsb-guid="166e6ba0")
                  .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="0713c8ad")
                    .internal-fsb-element(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'hidden', 'WebkitBorderRadius': '100px 100px 100px 100px', 'background': 'rgba(245, 245, 245, 1)', 'borderRadius': '100px 100px 100px 100px', 'height': '75px', 'overflowX': 'hidden', 'overflowY': 'hidden', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '75px'}, internal-fsb-guid="8d2ed478")
                      .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="cc344be8")
                        img(style={'display': 'block', 'height': '100%', 'padding': '0px', 'ratio': '1:1', 'width': '100%'}, internalFsbRatioFit="true")
                        img(style={'display': 'none'}, internalFsbRatioExpand="true", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC")
                    .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="247b6c15")
                      .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'WebkitAlignContent': 'space-between', 'alignContent': 'space-between', 'marginBottom': '10px', 'minHeight': '75px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="b2ae447c")
                        .col-12.internal-fsb-element(style={'fontSize': '14px', 'marginBottom': '5px', 'paddingLeft': '15px', 'paddingRight': '85px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].message")))}, internal-fsb-guid="62369e5c")
                        .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '20px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="887e3d09")
                          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '15px', 'paddingRight': '0px'}, internal-fsb-guid="29674a6c")
                            | #{this.getDataFromNotation("Post[" + i + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].createdAt")}
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="5469cbc2")
                          if this.isUser(data.columns["uid"])
                            Button.-fsb-self-281067ca.btn.btn-sm.internal-fsb-element(onClick=((event) => { window.internalFsbSubmit('281067ca', 'Post', event, ((results) => { this.manipulate('281067ca', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="281067ca")
                              .-fsb-self-281067ca-text.internal-fsb-element(style={'FsbReusableId': '281067ca-text', 'FsbReusableName': '', 'borderBottomColor': 'rgba(212, 212, 212, 1)', 'borderBottomStyle': 'none', 'borderLeftColor': 'rgba(212, 212, 212, 1)', 'borderLeftStyle': 'none', 'borderRightColor': 'rgba(212, 212, 212, 1)', 'borderRightStyle': 'none', 'borderTopColor': 'rgba(212, 212, 212, 1)', 'borderTopStyle': 'none'}, internal-fsb-guid="281067ca-text")
                                | ลบ
                        .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="64d4b2bb")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="01e05bb0")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="b32deb04")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.hasFondOf(i) ? '0' : '1', internal-fsb-guid="82728a83")
                          input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="96cba469")
                          Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexShrink': '1', 'flexShrink': '1', 'fontSize': '13px', 'marginLeft': '15px', 'paddingLeft': '5px', 'paddingRight': '5px', 'whiteSpace': 'nowrap', borderBottomColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderLeftColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderRightColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})(), borderTopColor: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})()}, onClick=((event) => { window.internalFsbSubmit('cc4b29ed', 'Action', event, ((results) => { this.manipulate('cc4b29ed', 'Action', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="cc4b29ed")
                            .internal-fsb-element(style={'display': 'inline-block', color: (()=>{return (this.hasFondOf(i)) ? '#005eff' : undefined;})()}, internal-fsb-guid="38be6125")
                              | ชื่นชอบ
                            if this.hasFondOf(i)
                              .internal-fsb-element(style={'color': 'rgba(0, 94, 255, 1)', 'display': 'inline-block', 'marginLeft': '5px', 'position': 'relative', 'top': '-2px'}, dangerouslySetInnerHTML={__html: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-box2-heart-fill\" viewBox=\"0 0 16 16\">\n<path d=\"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z\"/>\n</svg>"}, internal-fsb-guid="c4e84172")
                          .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'lineHeight': '26px', 'paddingLeft': '8px', 'paddingRight': '0px'}, internal-fsb-guid="ac71a3c1")
                            | จำนวนผู้ที่ชื่นชอบ #{this.getTotalAction(1, i)} คน 
                      .-fsb-preset-bb841183.internal-fsb-element.internal-fsb-strict-layout(style={'FsbInheritedPresets': 'bb841183', 'paddingLeft': '15px', 'paddingRight': '15px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ed431ea8")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="bec0942b")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="b5b68759")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="063e86b6")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="26652008")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="0a824160")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="0e6227b3")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="c43cb8c4")
                        input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="92426ec9")
                        .col-12.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="6c7eaab2")
                          input.form-control.form-control-sm(style={'FsbCodeLock': '1', 'WebkitBorderRadius': '3px 3px 3px 3px', 'borderRadius': '3px 3px 3px 3px', 'display': 'block', 'width': '100%'}, data-pid=data.keys['id'], id='comment-box-pid-' + data.keys['id'], onKeyPress=this.onTextboxKeyPress_6c7eaab2.bind(this), placeholder="คุณมีความเห็นอย่างไร?", required=true, type="text")
                        Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, onClick=((event) => { window.internalFsbSubmit('dc261964', 'Comment', event, ((results) => { this.manipulate('dc261964', 'Comment', results); }).bind(this)); }).bind(this), id='comment-create-pid-' + data.keys['id'], type="button", onSuccess=this.onButtonSuccess_dc261964.bind(this), internal-fsb-guid="dc261964")
                          .internal-fsb-element(internal-fsb-guid="d68bb295")
                            | Submit
                      if !this.hasAnyReply(i)
                        .-fsb-self-bb841183.internal-fsb-element.internal-fsb-strict-layout.reply.v1(internal-fsb-class="FlowLayout", internal-fsb-guid="bb841183")
                          .col-12.internal-fsb-element(style={'fontSize': '13px', 'textAlign': 'center'}, internal-fsb-guid="c312e749")
                            | ตอนนี้ยังไม่มีความเห็นใดๆ
                      each data, j in this.getDataFromNotation("Post[" + i + "].Comment", true, false)
                        .-fsb-preset-bb841183.internal-fsb-element.internal-fsb-strict-layout(style={'FsbInheritedPresets': 'bb841183', 'paddingBottom': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || j), data-fsb-index=j, internal-fsb-class="FlowLayout", internal-fsb-guid="432259c0")
                          .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="1c7a4da3")
                            .internal-fsb-element.internal-fsb-strict-layout(style={'borderBottomColor': 'rgba(242, 242, 242, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'paddingBottom': '10px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="7306d9e2")
                              .col-12.internal-fsb-element(style={'fontSize': '14px', 'paddingBottom': '5px', 'paddingRight': '85px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].message")))}, internal-fsb-guid="042480cd")
                              .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="a61277ee")
                                .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '15px'}, internal-fsb-guid="662c761e")
                                  | #{this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].createdAt")}
                                input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].id"), internal-fsb-guid="53b67855")
                                if this.isUser(data.columns["uid"])
                                  Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexBasis': '50px', 'flexBasis': '50px', 'fontSize': '13px', 'marginRight': '20px'}, onClick=((event) => { window.internalFsbSubmit('5d65c9a9', 'Comment', event, ((results) => { this.manipulate('5d65c9a9', 'Comment', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="5d65c9a9")
                                    .internal-fsb-element(internal-fsb-guid="47705a92")
                                      | ลบ
                          .-fsb-preset-bb841183.internal-fsb-element.internal-fsb-strict-layout(style={'FsbInheritedPresets': 'bb841183', 'paddingBottom': '0px', 'paddingLeft': '15px', 'paddingRight': '15px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="e5211663")
                            each data, k in this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].Reply", true, false)
                              .-fsb-self-442b18b5.col-11.internal-fsb-element.internal-fsb-strict-layout.offset-1(key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || k), data-fsb-index=k, internal-fsb-class="FlowLayout", internal-fsb-guid="442b18b5")
                                .col-12.internal-fsb-element(style={'fontSize': '13px', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '70px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].Reply[" + k + "].message")))}, internal-fsb-guid="ad85704d")
                                .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="da00c716")
                                  .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="5a08e178")
                                    | #{this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].Reply[" + k + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].Reply[" + k + "].createdAt")}
                                  input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].Reply[" + k + "].id"), internal-fsb-guid="924b8199")
                                  if this.isUser(data.columns["uid"])
                                    Button.-fsb-preset-281067ca.btn.btn-sm.internal-fsb-element(style={'FsbCodeLock': '1', 'FsbInheritedPresets': '281067ca', 'WebkitFlexBasis': '50px', 'flexBasis': '50px', 'fontSize': '13px'}, onClick=((event) => { window.internalFsbSubmit('47ebd056', 'Reply', event, ((results) => { this.manipulate('47ebd056', 'Reply', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="47ebd056")
                                      .internal-fsb-element(internal-fsb-guid="5b2adbda")
                                        | ลบ
                            .-fsb-preset-442b18b5.col-11.internal-fsb-element.internal-fsb-strict-layout.offset-1(style={'FsbInheritedPresets': '442b18b5', 'WebkitBorderRadius': '3px 3px 3px 3px', 'background': 'rgba(255, 255, 255, 1)', 'borderBottomColor': 'rgba(212, 212, 212, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'borderLeftColor': 'rgba(212, 212, 212, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px', 'borderRadius': '3px 3px 3px 3px', 'borderRightColor': 'rgba(212, 212, 212, 1)', 'borderRightStyle': 'solid', 'borderRightWidth': '1px', 'borderTopColor': 'rgba(212, 212, 212, 1)', 'borderTopStyle': 'solid', 'borderTopWidth': '1px', 'paddingBottom': '0px', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="004b6895")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="25ac372b")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", value=this.getDataFromNotation("Post[" + i + "].Comment[" + j + "].id"), internal-fsb-guid="e976813d")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="bc8dc2a4")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="302e6b73")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="ccd6346a")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="56a26b1d")
                              input.col-12.internal-fsb-element(style={'FsbCodeLock': '1'}, type="hidden", internal-fsb-guid="ec906022")
                              .col-12.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="87379be8")
                                input.form-control.form-control-sm(style={'FsbCodeLock': '1', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderTopStyle': 'none', 'display': 'block', 'width': '100%'}, data-cid=data.keys['id'], id='reply-box-cid-' + data.keys['id'], onKeyPress=this.onTextboxKeyPress_87379be8.bind(this), placeholder="คุณมีความเห็นอย่างไร?", required=true, type="text")
                              Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, onClick=((event) => { window.internalFsbSubmit('e0e69546', 'Reply', event, ((results) => { this.manipulate('e0e69546', 'Reply', results); }).bind(this)); }).bind(this), id='reply-create-cid-' + data.keys['id'], type="button", onSuccess=this.onButtonSuccess_e0e69546.bind(this), internal-fsb-guid="e0e69546")
                                .internal-fsb-element(internal-fsb-guid="97b6cd15")
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