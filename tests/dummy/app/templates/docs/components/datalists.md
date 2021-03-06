# Datalist

Datalist are used to display record details, think of them as readonly form controls.

To see a full list of arguments check out the [api page](../api/components/uxs-datalist)

## Simple List Usage

{{docs/uxs-datalist/basic-demo}}

## Yielding Child Components

**NOTE:** To use yielded components you need to make sure the datalist items _empty_ property is set to null. This can be set on an individual _list.item_ or set as default on the _uxs-datalist_

{{docs/uxs-datalist/yield-demo}}

## The Datalist Item

A Datalist consists of items displaying a label and value. If the value is empty an "empty" string can be provided.

To see a full list of arguments for items check out the [api page](../api/components/uxs-datalist-item)

{{docs/uxs-datalist/item-demo}}

## Testable Elements

This component provides the following test selectors.

### data-test-datalist

### data-test-datalist-item

### data-test-datalist-label

### data-test-datalist-row

### data-test-datalist-value

### data-test-datalist-tip

## Styles Usage

You can customise the look of your datalist with the style attribute.

{{docs/uxs-datalist/all-styles}}

{{args-table/align-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
