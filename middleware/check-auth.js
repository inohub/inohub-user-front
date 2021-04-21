export default function (context) {
  console.log('CHECK-AUTH MIDDLEWARE')
  context.store.dispatch('initAuth', context.req)
}
