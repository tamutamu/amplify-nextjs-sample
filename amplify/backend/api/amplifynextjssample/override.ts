import { AmplifyApiGraphQlResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  if (resources.models) {
    const model = resources.models["Post"];
    const functionKey =
      "MutationcreatePostinit1FunctionMutationcreatePostinit1Function.AppSyncFunction";

    //   console.log(functionKey);
    //   console.log(model.appsyncFunctions);
    //   console.log(model.appsyncFunctions[functionKey]);

    model.appsyncFunctions[functionKey].dataSourceName =
      "CommonValidatorLambdaDataSource";
  }
}
