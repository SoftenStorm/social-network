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
      const control1 = ReactDOM.findDOMNode(this.refs.submit);
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
              Button.btn.btn-secondary.btn-sm.col-2.internal-fsb-element(style={'FsbCodeLock': '1', 'display': 'none'}, ref="submit", onClick=((event) => { window.internalFsbSubmit('66766b99', 'Post', event, ((results) => { this.manipulate('66766b99', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="66766b99")
                .internal-fsb-element(internal-fsb-guid="66766b99-text")
                  | Submit
            .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ac036c3a")
              each data, i in this.getDataFromNotation("Post", true, false)
                .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '15px', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-class="FlowLayout", internal-fsb-guid="166e6ba0")
                  .internal-fsb-element(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'hidden', 'WebkitBorderRadius': '100px 100px 100px 100px', 'background': 'rgba(245, 245, 245, 1)', 'borderRadius': '100px 100px 100px 100px', 'height': '75px', 'overflowX': 'hidden', 'overflowY': 'hidden', 'paddingLeft': '0px', 'paddingRight': '0px', 'width': '75px'}, internal-fsb-guid="8d2ed478")
                    .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="cc344be8")
                      img(style={'display': 'block', 'height': '100%', 'padding': '0px', 'ratio': '1:1', 'width': '100%'}, internalFsbRatioFit="true")
                      img(style={'display': 'none'}, internalFsbRatioExpand="true", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC")
                  .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'WebkitAlignContent': 'space-between', 'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'alignContent': 'space-between', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="247b6c15")
                    .col-12.internal-fsb-element(style={'fontSize': '14px', 'paddingLeft': '15px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].message")))}, internal-fsb-guid="62369e5c")
                    .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="887e3d09")
                      .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '13px', 'paddingLeft': '15px', 'paddingRight': '0px'}, internal-fsb-guid="29674a6c")
                        | #{this.getDataFromNotation("Post[" + i + "].User.firstname")}
                      input.col-12.internal-fsb-element(type="hidden", value=this.getDataFromNotation("Post[" + i + "].id"), internal-fsb-guid="5469cbc2")
                      Button.btn.btn-sm.internal-fsb-element(style={'WebkitFlexBasis': '50px', 'flexBasis': '50px', 'fontSize': '13px', 'paddingBottom': '0px', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px'}, onClick=((event) => { window.internalFsbSubmit('281067ca', 'Post', event, ((results) => { this.manipulate('281067ca', 'Post', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="281067ca")
                        .internal-fsb-element(internal-fsb-guid="281067ca-text")
                          | ลบ
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