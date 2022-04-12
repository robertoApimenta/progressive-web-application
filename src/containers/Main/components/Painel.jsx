import React, { memo } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';

import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Painel({ updateAt, onChange, data, country, getCovidData }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
            </ItemStyled>
        </MenuItem>
    );

    const textCovid19 = `País: ${country}, Casos: ${cases} e Recuperados: ${recovered}`;

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://www.globo.com'
        })
    }

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    }

    const renderSharedButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="spam" color="primary">Covid19</Typography>
                    <Typography variant="h5" component="spam" color="primary">Painel Coronavirus</Typography>
                    <Typography variant="h5" component="spam" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {!navigatorHasShare ? renderSharedButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Painel);