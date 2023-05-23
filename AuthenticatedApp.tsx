export const AuthenticatedApp = () => {
  
  const { user } = useAuth();
  
  return (
    <>
      <NativeBaseProvider>
            <AppNavigation/>
        </NativeBaseProvider>
    </>
    )
  
}