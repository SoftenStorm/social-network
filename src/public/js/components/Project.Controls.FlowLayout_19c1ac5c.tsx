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
class FlowLayout_19c1ac5c extends Base {
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
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'MsFlexDirection': 'column-reverse', 'WebkitFlexDirection': 'column-reverse', 'WebkitJustifyContent': 'start', 'borderRightColor': 'rgba(0, 43, 255, 1)', 'borderRightWidth': '1px', 'flexDirection': 'column-reverse', 'justifyContent': 'start', 'maxHeight': '100vh', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="col-12 col-md-4 internal-fsb-element internal-fsb-inverse internal-fsb-stretch internal-fsb-strict-layout " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="19c1ac5c")
        each data, i in this.getDataFromNotation("Post", true, false)
          if this.isQuote(i)
            .internal-fsb-element.internal-fsb-strict-layout(style={'color': 'rgba(255, 255, 255, 1)', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-class="FlowLayout", internal-fsb-guid="b3377727")
              .internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="4454cb52")
                .internal-fsb-element.internal-fsb-strict-layout(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'paddingLeft': '7px', 'paddingRight': '7px', 'paddingTop': '5px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="a960b428")
                  .internal-fsb-element.internal-fsb-stretch.internal-fsb-strict-layout(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'hidden', 'WebkitAlignContent': 'space-between', 'WebkitBorderRadius': '5px 5px 5px 5px', 'alignContent': 'space-between', 'background': 'rgba(66, 117, 255, 1)', 'borderBottomColor': 'rgba(255, 255, 255, 1)', 'borderBottomWidth': '1px', 'borderLeftColor': 'rgba(255, 255, 255, 1)', 'borderLeftWidth': '1px', 'borderRadius': '5px 5px 5px 5px', 'borderRightColor': 'rgba(255, 255, 255, 1)', 'borderRightWidth': '1px', 'borderTopColor': 'rgba(255, 255, 255, 1)', 'borderTopWidth': '1px', 'minHeight': '75px', 'overflowX': 'hidden', 'overflowY': 'hidden', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '5px', 'width': '100%'}, internal-fsb-class="FlowLayout", internal-fsb-guid="4e1376dd")
                    .internal-fsb-element(style={'fontSize': '14px', 'lineHeight': '1.15em', 'marginBottom': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'width': '100%'}, internal-fsb-guid="00d601cc")
                      .internal-fsb-element(style={'color': 'rgba(181, 228, 255, 1)', 'display': 'inline', 'fontSize': '24px'}, internal-fsb-guid="ea62e951")
                        | “
                      .internal-fsb-element(style={'display': 'inline', 'fontWeight': '500', 'lineHeight': '1.15em', 'paddingLeft': '5px', 'paddingRight': '5px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Post[" + i + "].message")))}, internal-fsb-guid="b8cab4bc")
                      .internal-fsb-element(style={'FsbTransform': '0.00000000 -19.04762043 0.00000000 -1.00000000 0.00001000 0.00001000 1.00000000 1.00000000 1.00000000', 'MozTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'MsTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'WebkitTransform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)', 'color': 'rgba(181, 228, 255, 1)', 'display': 'inline-block', 'fontSize': '24px', 'transform': 'matrix3d(1, -1.99998e-05, -2.00002e-05, 0, 2.00002e-05, 1, 1.99998e-05, 0, -1.99998e-05, 2.00002e-05, -1, 0, 0, 19.0476, 0, 1)'}, internal-fsb-guid="96652c91")
                        | ”
                    .internal-fsb-element.internal-fsb-strict-layout(style={'display': 'block', 'fontSize': '8px', 'fontStyle': 'italic', 'lineHeight': '1.15em', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ab14033c")
                      .internal-fsb-element(style={'WebkitFlexBasis': '0px', 'WebkitFlexGrow': '1', 'flexBasis': '0px', 'flexGrow': '1', 'fontSize': '8px', 'fontStyle': 'italic', 'lineHeight': '1.15em', 'paddingLeft': '13px', 'paddingRight': '5px'}, internal-fsb-guid="30586748")
                        | — #{this.getDataFromNotation("Post[" + i + "].User.firstname")} #{this.getDataFromNotation("Post[" + i + "].User.lastname")}
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_19c1ac5c', FlowLayout_19c1ac5c);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.