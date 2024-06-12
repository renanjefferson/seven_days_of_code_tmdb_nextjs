import { FiSearch } from "react-icons/fi";
import { Button } from "../ui/Button";
import { Root, Label, Container, Control } from "../ui/Input";

export function Search() {
  return (
    <div>
      <form className="flex justify-center">
        <Root>
          <Label labelText="Buscar Filme" srOnly>
            <Container>
              <Control placeholder="Digite algum filme para pesquisar..." />
              <Button variant="ghost" type="submit">
                <span className="sr-only">Buscar filme</span>
                <FiSearch size={24} className="text-stone-400" />
              </Button>
            </Container>
          </Label>
        </Root>
      </form>
    </div>
  );
}
