/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function CharacterSection(){
    return(
        <div className="characters-section">
            <div className="section-header">
                <b className="section-title">Characters</b>
                <a className="see-all-btn" href="/characters">See all</a>
            </div>
            <div className="characters-container">
                <div id="flex-scroll">
                </div>
            </div>
        </div>
    );
}

export default CharacterSection;