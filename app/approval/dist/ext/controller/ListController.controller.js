sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("approval.ext.controller.ListController",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel();debugger;let t=this.base.getView().getContent()[0].mAggregations.header.mAggregations.content[0].mAggregations.items[0].mAggregations.content.mAggregations.filterItems[0];t.setVisible(false)}}})});