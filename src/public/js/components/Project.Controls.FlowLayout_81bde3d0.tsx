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
  isLoggingIn: boolean
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  isLoggingIn: true
});

// Auto[ClassBegin]--->
class FlowLayout_81bde3d0 extends Base {
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
        
    DataManipulationHelper.register("9bc4e00b", "navigate", ["1565c651","1b97772a","53da3716"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
    DataManipulationHelper.register("37c296b4", "navigate", ["1565c651","53da3716"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
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
  protected onLinkClick_b011a65a(event: Event) {

    // Handle the event of onLinkClick (Link 2) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    this.setState({isLoggingIn: false});
    
  }

  protected onLinkClick_0cb8b093(event: Event) {

    // Handle the event of onLinkClick (Link 2) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    this.setState({isLoggingIn: true});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'WebkitBorderRadius': '3px 3px 3px 3px', 'borderBottomColor': 'rgba(0, 43, 255, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'borderLeftColor': 'rgba(0, 43, 255, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px', 'borderRadius': '3px 3px 3px 3px', 'borderRightColor': 'rgba(0, 43, 255, 1)', 'borderRightStyle': 'solid', 'borderRightWidth': '1px', 'borderTopColor': 'rgba(0, 43, 255, 1)', 'borderTopStyle': 'solid', 'borderTopWidth': '1px', 'marginTop': '100px', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="col-6 internal-fsb-element internal-fsb-strict-layout offset-3 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="81bde3d0")
        .col-12.internal-fsb-element(style={'color': 'rgba(0, 43, 255, 1)', 'fontSize': '24px', 'marginBottom': '10px', 'marginTop': '10px', 'textAlign': 'center'}, internal-fsb-guid="dc3a5190")
          | Social Network
        label.col-12.internal-fsb-element(internal-fsb-guid="c0ee5854")
          .container-fluid
            .internal-fsb-strict-layout.row
              .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="7c8b7819")
                .col-4.internal-fsb-element.offset-0(style={'textAlign': 'right'}, internal-fsb-guid="d07822a9")
                  | อีเมล์
                .col-7.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="1565c651")
                  input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text")
        label.col-12.internal-fsb-element(internal-fsb-guid="86c86c51")
          .container-fluid
            .internal-fsb-strict-layout.row
              .col-12.internal-fsb-element.internal-fsb-strict-layout.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="84d2b03b")
                .col-4.internal-fsb-element.offset-0(style={'textAlign': 'right'}, internal-fsb-guid="7a8498de")
                  | รหัสผ่าน
                .col-7.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="53da3716")
                  input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text")
        if !this.state.isLoggingIn
          label.col-12.internal-fsb-element(internal-fsb-guid="7ad4652c")
            .container-fluid
              .internal-fsb-strict-layout.row
                .col-12.internal-fsb-element.internal-fsb-strict-layout.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="3417a2ad")
                  .col-4.internal-fsb-element.offset-0(style={'textAlign': 'right'}, internal-fsb-guid="38be5754")
                    | ยืนยันรหัสผ่าน
                  .col-7.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="1b97772a")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text")
        if !this.state.isLoggingIn
          Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '10px', 'marginTop': '5px'}, onClick=((event) => { window.internalFsbSubmit('9bc4e00b', 'User', event, ((results) => { this.manipulate('9bc4e00b', 'User', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="9bc4e00b")
            .internal-fsb-element(internal-fsb-guid="9bc4e00b-text")
              | สมัครสมาชิก
        if this.state.isLoggingIn
          Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '10px', 'marginTop': '5px'}, onClick=((event) => { window.internalFsbSubmit('37c296b4', 'User', event, ((results) => { this.manipulate('37c296b4', 'User', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="37c296b4")
            .internal-fsb-element(internal-fsb-guid="ca890b23")
              | เข้าสู่ระบบ
        .internal-fsb-element(style={'fontSize': '14px', 'paddingLeft': '30px', 'paddingRight': '30px', 'width': '100%'}, internal-fsb-guid="85b46570")
          if !this.state.isLoggingIn
            .internal-fsb-element(style={'display': 'inline-block'}, internal-fsb-guid="8138a7c8")
              | ยังไม่มีสมาชิก?
          if !this.state.isLoggingIn
            a.internal-fsb-element(style={'display': 'inline-block', 'marginLeft': '15px', 'marginRight': '10px'}, href="javascript:void(0)", onClick=this.onLinkClick_b011a65a.bind(this), internal-fsb-guid="b011a65a")
              .internal-fsb-element(internal-fsb-guid="b011a65a-text")
                | สมัครเลย
          if this.state.isLoggingIn
            .internal-fsb-element(style={'display': 'inline-block'}, internal-fsb-guid="982c997c")
              | มีสมาชิกอยู่แล้ว?
          if this.state.isLoggingIn
            a.internal-fsb-element(style={'display': 'inline-block', 'marginLeft': '15px', 'marginRight': '10px'}, href="javascript:void(0)", onClick=this.onLinkClick_0cb8b093.bind(this), internal-fsb-guid="0cb8b093")
              .internal-fsb-element(internal-fsb-guid="4890b3d6")
                | เข้าสู่ระบบแทน
        label.col-12.internal-fsb-element(internal-fsb-guid="96a954e4")
          .container-fluid
            .internal-fsb-strict-layout.row
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_81bde3d0', FlowLayout_81bde3d0);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.