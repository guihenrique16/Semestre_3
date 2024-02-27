import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonContent, CalendarText, CalendarView, Container, DataProfileCard, DataProfileCard2, LocalText, StarText, StarView, TitleClinica } from './style';

export const ButtonCardClinica = () => {
    return (
        <Container>
            <ButtonContent>
                <DataProfileCard>
                    <TitleClinica>flabergasted</TitleClinica>
                    <LocalText>Sao Paulo, SP</LocalText>
                </DataProfileCard>
                <DataProfileCard2>
                    <StarView>
                        <AntDesign name="star" size={20} color="#F9A620" />
                        <StarText>4,5</StarText>
                    </StarView>
                    <CalendarView>
                        <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                        <CalendarText>Seg-Sex</CalendarText>
                    </CalendarView>
                </DataProfileCard2>
            </ButtonContent>
        </Container>
    )
}