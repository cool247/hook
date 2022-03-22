import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ArrayFormField from "./ArrayFormField";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div {...other}>{value === index && <Typography>{children}</Typography>}</div>;
}

export default function SimpleTabs() {
  const methods = useForm();

  const {
    control,
    getValues,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const { fields, append, remove } = useFieldArray({
    name: "generalFormFields",
    control,
  });

  const onSubmit = data => {
    console.log(data, "DATA");
  };

  const [valueTab, setValueTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppBar position="static">
          <Tabs value={valueTab} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Form" />
          </Tabs>
        </AppBar>
        <TabPanel value={valueTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <ArrayFormField
            fields={fields}
            append={append}
            remove={remove}
            errors={errors}
            control={control}
            getValues={getValues}
            reset={reset}
            setValue={setValue}
          />
        </TabPanel>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}

// import { Button, DatePicker, Input, Col, Row, Form } from "antd";
// import "antd/dist/antd.css";

// import React from "react";
// import { useForm, Controller } from "react-hook-form";

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//   };

//   // const [form] = Form.useForm

//   console.log(errors);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "24px" }}>
//       <Form>
//         <Row gutter={16}>
//           <Col span={10}>
//             <Form.Item>
//               <Controller
//                 name="example1"
//                 control={control}
//                 rules={{
//                   required: "Required",
//                   minLength: {
//                     value: 3,
//                     message: "should be greater than 3",
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: "Exceeded max characters allowed",
//                   },
//                 }}
//                 render={({ onChange, value }) => (
//                   <Input
//                     onChange={onChange}
//                     value={value}
//                     status={errors?.example1 ? "error" : ""}
//                     placeholder={errors?.example1 ? "Required" : "First Name"}
//                   />
//                 )}
//               />
//             </Form.Item>
//           </Col>
//           <Col span={10}>
//             <Form.Item>
//               <Controller
//                 name="example2"
//                 defaultValue=""
//                 control={control}
//                 rules={{
//                   required: "Required",
//                   minLength: {
//                     value: 3,
//                     message: "should be greater than 3",
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: "Exceeded max characters allowed",
//                   },
//                 }}
//                 render={({ onChange, value }) => (
//                   <Input
//                     onChange={onChange}
//                     value={value}
//                     status={errors?.example2 ? "error" : ""}
//                     placeholder={errors?.example2 ? "Required" : "Last Name"}
//                   />
//                 )}
//               />
//             </Form.Item>
//           </Col>
//           <Col span={4}>
//             <Button type="submit">Press me</Button>
//           </Col>
//         </Row>
//       </Form>
//     </form>
//   );
// }
