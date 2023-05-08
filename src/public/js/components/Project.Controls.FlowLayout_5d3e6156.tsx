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
class FlowLayout_5d3e6156 extends Base {
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
        
    DataManipulationHelper.register("759b7c95", "update", ["18d7036a","a2e5b0b3","bd54e2da"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
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
  protected onButtonSuccess_759b7c95(event: CustomEvent) {

    // Handle the event of onButtonSuccess (begin) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    window.location = '/home/feed';
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'marginBottom': '100px', 'marginTop': '100px', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="col-10 internal-fsb-element internal-fsb-strict-layout offset-1 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="5d3e6156")
        .col-12.internal-fsb-element(style={'color': 'rgba(0, 43, 255, 1)', 'fontSize': '24px', 'marginBottom': '10px', 'marginTop': '10px', 'textAlign': 'center'}, internal-fsb-guid="8b875b88")
          | Social Quote
        .col-12.internal-fsb-element(style={'marginBottom': '30px', 'textAlign': 'left'}, internal-fsb-guid="5756d266")
          |       การใช้ Social Quote นี้ คุณจะต้องยินยอมว่าข้อความของคุณจะไม่มีการนำเนื้อหาใดๆ ที่ทำให้ผู้อื่นรู้สึกโกรธอย่างรุนแรง, ไม่เห็นถึงจิตใจของผู้อื่น, ก่อให้เกิดความรำคาญ, หรือก่อความไม่สงบเรียบร้อย อาทิเช่น
          div
            br
            div
              | - เนื้อหาที่นำไปสู่การทำให้ชื่อเสียงผู้อื่นเสียหาย, ทำให้ถูกดูหมิ่น, หรือก่อให้เกิดความลำเอียง
            div
              | - ชักจูงให้เกิดความรุนแรงและการประทุษร้าย
            div
              | - ชักจูงให้ใช้อาวุธอย่างผิดกฎหมายหรือประมาทเลินเล่อ
            div
              | - ภาพและเนื้อหาที่ส่อไปในทางเพศสัมพันธ์หรือลามกอนาจาร
            div
              | - การบิดเบือนคำสอนในศาสนาต่างๆ
            div
              | - ข้อมูลหรือความนัยที่ส่อถึงความเท็จ
            div
              | - ของมึนเมา, ยาเสพติดให้โทษ, หรือยาสูบ
        label.col-12.internal-fsb-element(internal-fsb-guid="27532a82")
          .container-fluid
            .internal-fsb-strict-layout.row
              .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="678e8c59")
                .col-4.internal-fsb-element.offset-0(style={'textAlign': 'right'}, internal-fsb-guid="5dd2b04a")
                  | ลงชื่อ
                .col-5.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="a2e5b0b3")
                  input.form-control.form-control-sm(style={'FsbCodeLock': '1', 'display': 'block', 'width': '100%'}, type="text")
        label.col-12.internal-fsb-element(internal-fsb-guid="18b2136a")
          .container-fluid
            .internal-fsb-strict-layout.row
              .col-12.internal-fsb-element.internal-fsb-strict-layout.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="9a634d31")
                .col-4.internal-fsb-element.offset-0(style={'textAlign': 'right'}, internal-fsb-guid="b23102ca")
                  | นามสกุล
                .col-5.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="18d7036a")
                  input.form-control.form-control-sm(style={'FsbCodeLock': '1', 'display': 'block', 'width': '100%'}, type="text")
                .col-5.internal-fsb-element.offset-4(style={'fontSize': '14px', 'marginTop': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="989e002d")
                  | มีเพียงชื่อที่จะนำไปแสดงในพื้นที่สาธารณะ
        input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="bd54e2da")
        if !this.state.isLoggingIn
          Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'FsbCodeLock': '1', 'marginBottom': '10px', 'marginTop': '5px'}, onClick=((event) => { window.internalFsbSubmit('759b7c95', 'User', event, ((results) => { this.manipulate('759b7c95', 'User', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_759b7c95.bind(this), internal-fsb-guid="759b7c95")
            .internal-fsb-element(internal-fsb-guid="09992e70")
              | เริ่มใช้งาน
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_5d3e6156', FlowLayout_5d3e6156);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.