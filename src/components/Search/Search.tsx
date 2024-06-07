import { Root, Label, Container, Control } from "../ui/Input";

export function Search() {
  return (
    <div>
      <form className="flex justify-center">
        <Root>
          <Label labelText="Buscar Filme" srOnly>
            <Container>
              <Control placeholder="Digite algum filme para pesquisar..." />
            </Container>
          </Label>
        </Root>
      </form>
    </div>
  );
}
