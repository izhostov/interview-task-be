import { DefaultContext } from 'koa';

export default class FormController {

	public static async validation(ctx: DefaultContext) {
        const formData = ctx.request.body;

		if (formData.firstName.length < 5) {
            ctx.body = 'First Name cannot be less than 5 characters';
			ctx.status = 500;
		} else {
			ctx.status = 200;
		}
	}
}
